import { container } from 'tsyringe';

import { ICategoriRepository } from '../../modules/cars/repositories/ICategoriRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoriRepository';

container.registerSingleton<ICategoriRepository>(
  'ICategoriRepository',
  CategoryRepository
);
