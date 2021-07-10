import CategoryRepository from '../../repositories/implementations/CategoriRepository';
import { ImportCategoryUseCase } from './ImportCategoriUseCase';
import { ImportCategoryController } from './ImportCategoryController';

const categoryRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
