import Categori from '../../entities/Categori';
import {
  ICreateCategoriDTO,
  ICategoriRepository,
} from '../ICategoriRepository';

class FakeCategoryRepository implements ICategoriRepository {
  private repository: Categori[];

  constructor() {
    this.repository = [];
  }

  async create({ name, description }: ICreateCategoriDTO): Promise<void> {
    const category = new Categori();

    Object.assign(category, {
      name,
      description,
    });

    this.repository.push(category);
  }

  async list(): Promise<Categori[]> {
    const all = this.repository;

    return all;
  }

  async findByName(name: string): Promise<Categori> {
    const category = this.repository.find((categori) => categori.name === name);

    return category;
  }
}

export { FakeCategoryRepository };
