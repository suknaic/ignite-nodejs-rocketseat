import CategoryRepository from '../../repositories/fake/CategoriRepository';
import { ImportCategoryUseCase } from './ImportCategoriUseCase';
import { ImportCategoryController } from './ImportCategoryController';

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
