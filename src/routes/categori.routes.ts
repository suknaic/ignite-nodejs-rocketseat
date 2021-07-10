import { Router } from 'express';
import Multer from 'multer';

import { CreateCategoriController } from '../modules/cars/useCases/createCategory/CreateCategoriController';
import { ImportCategoryController } from '../modules/cars/useCases/ImportCategory/ImportCategoryController';
import { listCategoryController } from '../modules/cars/useCases/ListCategory';

const categoriRoutes = Router();
const upload = Multer({
  dest: './tmp',
});

const createCategoriController = new CreateCategoriController();
const importCategoryController = new ImportCategoryController();

categoriRoutes.post('/', createCategoriController.handle);

categoriRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
);

export { categoriRoutes };
