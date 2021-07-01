import Categori from '../model/Categori';

interface ICreateCategoriDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Categori[];
  constructor() {
    this.categories = [];
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
}

export default CategoryRepository;
