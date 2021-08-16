import { Repository, getRepository } from 'typeorm';

import { Category } from '../entities/Categori';
import {
  ICreateCategoriDTO,
  ICategoriRepository,
} from '@modules/cars/repositories/ICategoriRepository';

class CategoryRepository implements ICategoriRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoriDTO): Promise<void> {
    const categori = this.repository.create({
      name,
      description,
    });

    await this.repository.save(categori);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const findCategori = await this.repository.findOne({ name });

    return findCategori;
  }
}

export { CategoryRepository };
