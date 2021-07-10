import CategoryRepository from '../../repositories/implementations/CategoriRepository';
import { CreateCategoriController } from './CreateCategoriController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export default (): CreateCategoriController => {
  const categoryRepository = new CategoryRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

  const createCategoriController = new CreateCategoriController(
    createCategoryUseCase
  );

  return createCategoriController;
};
