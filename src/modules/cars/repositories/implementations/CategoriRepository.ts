import { Repository, getRepository } from 'typeorm';

import Categori from '../../entities/Categori';
import {
  ICreateCategoriDTO,
  ICategoriRepository,
} from '../ICategoriRepository';

class CategoryRepository implements ICategoriRepository {
  private repository: Repository<Categori>;

  constructor() {
    this.repository = getRepository(Categori);
  }

  async create({ name, description }: ICreateCategoriDTO): Promise<void> {
    const categori = this.repository.create({
      name,
      description,
    });

    await this.repository.save(categori);
  }

  async list(): Promise<Categori[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Categori> {
    const findCategori = await this.repository.findOne({ name });

    return findCategori;
  }
}

export default CategoryRepository;
