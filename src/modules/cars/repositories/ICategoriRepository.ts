import { Category } from '@modules/cars/infra/typeorm/entities/Category';

interface ICreateCategoriDTO {
  name: string;
  description: string;
}

interface ICategoriRepository {
  create({ name, description }: ICreateCategoriDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriRepository, ICreateCategoriDTO };
