import { Router } from 'express';

import CategoriRepository from '../modules/cars/repositories/fake/CategoriRepository';
import CreateCategoryService from '../modules/cars/services/CreateCategoryService';

const categoriRoutes = Router();
const categoriRepository = new CategoriRepository();

categoriRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriRepository);

  createCategoryService.execulte({ name, description });

  return response.status(201).send();
});

categoriRoutes.get('/', (request, response) => {
  const allCategories = categoriRepository.list();

  return response.status(200).json(allCategories);
});

export { categoriRoutes };
