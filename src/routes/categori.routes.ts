import { Router } from 'express';

import CategoriRepository from '../modules/cars/repositories/fake/CategoriRepository';
import { createCategoriController } from '../modules/cars/useCases/createCategory';

const categoriRoutes = Router();

const categoriRepository = new CategoriRepository();

categoriRoutes.post('/', createCategoriController.create);

categoriRoutes.get('/', (request, response) => {
  const allCategories = categoriRepository.list();

  return response.status(200).json(allCategories);
});

export { categoriRoutes };
