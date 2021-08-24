import { FakeCarRepository } from '@modules/cars/repositories/fakes/FakeCarRepository';
import { ListAvailableCarsUseCase } from './listAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let fakeCarsRepository: FakeCarRepository;

describe('listAvailableCarsUseCase', () => {
  beforeEach(() => {
    fakeCarsRepository = new FakeCarRepository();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(fakeCarsRepository);
  });

  it('should be able to list all available cars', async () => {
    fakeCarsRepository.create({
      name: 'ford fiesta',
      description: 'carro sedan',
      daily_rate: 100,
      license_plate: 'abcd-65895',
      fine_amount: 50,
      brand: 'brand-car',
      category_id: '32cc1ce2-47a7-4180-80e0-49e9027702ee',
    });

    const car = await listAvailableCarsUseCase.execulte({});

    expect(car).toHaveLength(1);
  });

  it('should be able to list available cars by brand', async () => {
    fakeCarsRepository.create({
      name: 'car2',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abcd-65895',
      fine_amount: 50,
      brand: 'brand-car-test',
      category_id: '32cc1ce2-47a7-4180-80e0-49e9027702ee',
    });

    const car = await listAvailableCarsUseCase.execulte({
      brand: 'brand-car-test',
    });

    expect(car).toEqual(car);
  });
  it('should be able to list available cars by name', async () => {
    fakeCarsRepository.create({
      name: 'car3',
      description: 'description car',
      daily_rate: 100,
      license_plate: 'abcd-65895',
      fine_amount: 50,
      brand: 'brand-car-test',
      category_id: '32cc1ce2-47a7-4180-80e0-49e9027702ee',
    });

    const car = await listAvailableCarsUseCase.execulte({
      name: 'car3',
    });

    expect(car).toEqual(car);
  });
});
