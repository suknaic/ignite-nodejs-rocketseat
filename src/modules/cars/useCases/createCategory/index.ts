import CategoryRepository from '../../repositories/fake/CategoriRepository';
import { CreateCategoriController } from './CreateCategoriController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoryRepository = CategoryRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoriController = new CreateCategoriController(
  createCategoryUseCase
);

export { createCategoriController };