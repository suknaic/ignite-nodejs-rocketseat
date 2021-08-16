import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { IUSerRepository } from '@modules/accounts/repositories/IUserRepository';
import { ICategoriRepository } from '@modules/cars/repositories/ICategoriRepository';
import { CategoryRepository } from '@modules/cars/infra/typeorm/repositories/CategoriRepository';
import SpecificationRepository from '@modules/cars/infra/typeorm/repositories/SpecificationRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';
import { ICarRepository } from '@modules/cars/repositories/ICarRepository';
import { CarRepository } from '@modules/cars/infra/typeorm/repositories/CarRepository';

container.registerSingleton<ICategoriRepository>(
  'ICategoriRepository',
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  'ISpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUSerRepository>('IUSerRepository', UserRepository);

container.registerSingleton<ICarRepository>('ICarRepository', CarRepository);
