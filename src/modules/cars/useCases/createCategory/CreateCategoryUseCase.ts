import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../error/AppError';
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
      throw new AppError('Category alredy exists');
    }

    await this.categoriRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
