import Categori from '../../model/Categori';
import CategoryRepository from '../../repositories/fake/CategoriRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  execulte(): Categori[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
