import Categori from '../model/Categori';

interface ICreateCategoriDTO {
  name: string;
  description: string;
}

interface ICategoriRepository {
  create({ name, description }: ICreateCategoriDTO): void;
  list(): Categori[];
  findByName(name: string): Categori;
}

export { ICategoriRepository, ICreateCategoriDTO };
