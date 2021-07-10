import CategoryRepository from '../../repositories/implementations/CategoriRepository';
import { ImportCategoryUseCase } from './ImportCategoriUseCase';
import { ImportCategoryController } from './ImportCategoryController';

export default (): ImportCategoryController => {
  const categoryRepository = new CategoryRepository();
  const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
  );

  return importCategoryController;
};
