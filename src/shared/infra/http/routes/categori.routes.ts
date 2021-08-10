import { Router } from 'express';
import Multer from 'multer';

import { CreateCategoriController } from '@modules/cars/useCases/createCategory/CreateCategoriController';
import { ImportCategoryController } from '@modules/cars/useCases/ImportCategory/ImportCategoryController';
import { ListCategoryController } from '@modules/cars/useCases/ListCategory/ListCategoryController';

const categoriRoutes = Router();
const upload = Multer({
  dest: './tmp',
});

const createCategoriController = new CreateCategoriController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriRoutes.post('/', createCategoriController.handle);

categoriRoutes.get('/', listCategoryController.handle);

categoriRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
);

export { categoriRoutes };
