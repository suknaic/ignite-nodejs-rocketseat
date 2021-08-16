import { Category } from '../../infra/typeorm/entities/Categori';
import {
  ICreateCategoriDTO,
  ICategoriRepository,
} from '../ICategoriRepository';

class FakeCategoryRepository implements ICategoriRepository {
  private repository: Category[];

  constructor() {
    this.repository = [];
  }

  async create({ name, description }: ICreateCategoriDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.repository.push(category);
  }

  async list(): Promise<Category[]> {
    const all = this.repository;

    return all;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.find((categori) => categori.name === name);

    return category;
  }
}

export { FakeCategoryRepository };
