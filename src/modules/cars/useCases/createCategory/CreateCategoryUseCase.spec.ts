import { AppError } from '../../../../error/AppError';
import { FakeCategoryRepository } from '../../repositories/fakes/FakeCategoryRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let fakeCategoryRepository: FakeCategoryRepository;
let createCategoryUseCase: CreateCategoryUseCase;

describe('Create Category', () => {
  beforeEach(() => {
    fakeCategoryRepository = new FakeCategoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(fakeCategoryRepository);
  });

  it('should be able to create a new Category', async () => {
    const categoryTest = {
      name: 'category test',
      description: 'new category test',
    };

    await createCategoryUseCase.execulte(categoryTest);

    const createdCategory = await fakeCategoryRepository.findByName(
      categoryTest.name
    );

    expect(createdCategory).toHaveProperty('id');
  });

  it('should not be able to create a new Category with same name', async () => {
    const categoryTest = {
      name: 'category test',
      description: 'new category test',
    };

    await createCategoryUseCase.execulte(categoryTest);

    await expect(
      createCategoryUseCase.execulte(categoryTest)
    ).rejects.toBeInstanceOf(AppError);
  });
});
