import Categori from '@modules/cars/entities/Categori';
import { ICategoriRepository } from '@modules/cars/repositories/ICategoriRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('ICategoriRepository')
    private categoryRepository: ICategoriRepository
  ) {}

  async execulte(): Promise<Categori[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
