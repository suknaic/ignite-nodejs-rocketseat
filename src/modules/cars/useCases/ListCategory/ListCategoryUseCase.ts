import { inject, injectable } from 'tsyringe';

import Categori from '../../entities/Categori';
import { ICategoriRepository } from '../../repositories/ICategoriRepository';

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
