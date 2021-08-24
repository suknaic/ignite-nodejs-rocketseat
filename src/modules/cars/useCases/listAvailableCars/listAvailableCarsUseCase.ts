import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  brand?: string;
  name?: string;
  category_id?: string;
}
@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('ICarRepository')
    private CarRepository: ICarRepository
  ) {}

  async execulte({ brand, name, category_id }: IRequest): Promise<Car[]> {
    const cars = await this.CarRepository.findAvailable({
      brand,
      name,
      category_id,
    });

    return cars;
  }
}

export { ListAvailableCarsUseCase };
