import { ICategoriRepository } from '../../repositories/ICategoriRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriRepository: ICategoriRepository) {}
  execulte({ name, description }: IRequest): void {
    const categoriAlredyExistis = this.categoriRepository.findByName(name);

    if (categoriAlredyExistis) {
      throw new Error('Category alredy exists');
    }

    this.categoriRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
