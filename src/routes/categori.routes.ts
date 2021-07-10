import { Router } from 'express';
import Multer from 'multer';

import { CreateCategoriController } from '../modules/cars/useCases/createCategory/CreateCategoriController';
import importCategoryController from '../modules/cars/useCases/ImportCategory';
import { listCategoryController } from '../modules/cars/useCases/ListCategory';

const categoriRoutes = Router();
const upload = Multer({
  dest: './tmp',
});

const createCategoriController = new CreateCategoriController();

categoriRoutes.post('/', createCategoriController.handle);

categoriRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriRoutes };
