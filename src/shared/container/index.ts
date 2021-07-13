import { container } from 'tsyringe';

import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IUSerRepository } from '../../modules/accounts/repositories/IUserRepository';
import { ICategoriRepository } from '../../modules/cars/repositories/ICategoriRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoriRepository';
import SpecificationRepository from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';

container.registerSingleton<ICategoriRepository>(
  'ICategoriRepository',
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  'ISpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUSerRepository>('IUSerRepository', UserRepository);
