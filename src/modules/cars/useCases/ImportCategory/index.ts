import { ImportCategoryUseCase } from './ImportCategoriUseCase';
import { ImportCategoryController } from './ImportCategoryController';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
