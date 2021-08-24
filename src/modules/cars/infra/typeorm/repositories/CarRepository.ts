import { IAvailableCarDTO } from '@modules/cars/dtos/IAvailableCarDTO';
import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';

class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLincesencePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });
    return car;
  }

  async findAvailable({
    brand,
    name,
    category_id,
  }: IAvailableCarDTO): Promise<Car[]> {
    const carQuery = this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (brand) {
      carQuery.andWhere('c.brand = :brand', { brand });
    }
    if (name) {
      carQuery.andWhere('c.name = :name', { name });
    }
    if (category_id) {
      carQuery.andWhere('c.category_id = :category_id', { category_id });
    }

    const carsavailable = await carQuery.getMany();

    return carsavailable;
  }
}

export { CarRepository };
