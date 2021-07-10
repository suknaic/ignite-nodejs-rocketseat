import { ICategoriRepository } from '../../repositories/ICategoriRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriRepository: ICategoriRepository) {}
  async execulte({ name, description }: IRequest): Promise<void> {
    const categoriAlredyExistis = await this.categoriRepository.findByName(
      name
    );

    if (categoriAlredyExistis) {
      throw new Error('Category alredy exists');
    }

    await this.categoriRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
