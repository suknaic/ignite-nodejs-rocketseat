import Categori from '../../model/Categori';
import {
  ICreateCategoriDTO,
  ICategoriRepository,
} from '../ICategoriRepository';

class CategoryRepository implements ICategoriRepository {
  private categories: Categori[];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoriDTO): void {
    const categori = new Categori();
    Object.assign(categori, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(categori);
  }

  list(): Categori[] {
    return this.categories;
  }

  findByName(name: string): Categori {
    const findCategori = this.categories.find(
      (categori) => categori.name === name
    );

    return findCategori;
  }
}

export default CategoryRepository;
