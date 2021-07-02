import { Router } from 'express';
import Multer from 'multer';

import { createCategoriController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/ImportCategory';
import { listCategoryController } from '../modules/cars/useCases/ListCategory';

const categoriRoutes = Router();
const upload = Multer({
  dest: './tmp',
});

categoriRoutes.post('/', (request, response) => {
  return createCategoriController.handle(request, response);
});

categoriRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriRoutes };
