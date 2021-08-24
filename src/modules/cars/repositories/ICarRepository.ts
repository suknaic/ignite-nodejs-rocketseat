import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { IAvailableCarDTO } from '../dtos/IAvailableCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLincesencePlate(license_plate: string): Promise<Car>;
  findAvailable({ brand, name, category_id }: IAvailableCarDTO): Promise<Car[]>;
}

export { ICarRepository };
