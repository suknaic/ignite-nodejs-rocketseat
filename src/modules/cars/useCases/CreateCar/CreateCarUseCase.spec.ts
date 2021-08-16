import { FakeCarRepository } from '@modules/cars/repositories/fakes/FakeCarRepository';
import { AppError } from '@shared/error/AppError';
import { CreateCarUseCase } from './CreateCarUseCase';

let fakeCarRepository: FakeCarRepository;
let createCarUseCase: CreateCarUseCase;

describe('Create a New Car', () => {
  beforeEach(() => {
    fakeCarRepository = new FakeCarRepository();
    createCarUseCase = new CreateCarUseCase(fakeCarRepository);
  });

  it('should be able to create a new Car', async () => {
    const car = await createCarUseCase.execulte({
      name: 'car1',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abcd-12345',
      fine_amount: 60,
      brand: 'brand-car',
      category_id: 'category-id',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a Car with exists license plate', async () => {
    await createCarUseCase.execulte({
      name: 'car 1',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abcd-12345',
      fine_amount: 60,
      brand: 'brand-car',
      category_id: 'category-id',
    });
    await expect(
      createCarUseCase.execulte({
        name: 'car 2',
        description: 'description car',
        daily_rate: 100,
        license_plate: 'abcd-12345',
        fine_amount: 60,
        brand: 'brand-car',
        category_id: 'category-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create car with available true by default', async () => {
    const car = await createCarUseCase.execulte({
      name: 'car',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abcd-12345',
      fine_amount: 60,
      brand: 'brand-car',
      category_id: 'category-id',
    });

    expect(car.available).toBe(true);
  });
});
