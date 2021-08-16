import { Category } from '@modules/cars/infra/typeorm/entities/Categori';
import { ICategoriRepository } from '@modules/cars/repositories/ICategoriRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('ICategoriRepository')
    private categoryRepository: ICategoriRepository
  ) {}

  async execulte(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
