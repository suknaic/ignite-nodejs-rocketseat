import { Router } from 'express';

import { createCategoriController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/ListCategory';

const categoriRoutes = Router();

categoriRoutes.post('/', (request, response) => {
  return createCategoriController.create(request, response);
});

categoriRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriRoutes };
