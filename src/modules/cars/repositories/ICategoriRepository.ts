import Categori from '@modules/cars/infra/typeorm/entities/Categori';

interface ICreateCategoriDTO {
  name: string;
  description: string;
}

interface ICategoriRepository {
  create({ name, description }: ICreateCategoriDTO): Promise<void>;
  list(): Promise<Categori[]>;
  findByName(name: string): Promise<Categori>;
}

export { ICategoriRepository, ICreateCategoriDTO };
