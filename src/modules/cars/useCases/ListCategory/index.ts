import CategoryRepository from '../../repositories/fake/CategoriRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoryRepository = new CategoryRepository();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
