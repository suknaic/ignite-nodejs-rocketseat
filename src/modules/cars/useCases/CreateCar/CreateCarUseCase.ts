import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { AppError } from '@shared/error/AppError';

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

class CreateCarUseCase {
  constructor(private carRepository: ICarRepository) {}

  async execulte({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: IRequest) {
    const carExists = await this.carRepository.findByLincesencePlate(
      license_plate
    );
    if (carExists) {
      throw new AppError('Car alredy exists');
    }
    const car = await this.carRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    return car;
  }
}
export { CreateCarUseCase };
