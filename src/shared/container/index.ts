import { container } from 'tsyringe';

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
