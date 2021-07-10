import { inject, injectable } from 'tsyringe';

import { ICategoriRepository } from '../../repositories/ICategoriRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('ICategoriRepository')
    private categoriRepository: ICategoriRepository
  ) {}
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
