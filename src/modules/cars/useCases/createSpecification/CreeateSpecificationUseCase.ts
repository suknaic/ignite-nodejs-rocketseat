import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('ISpecificationRepository')
    private specificationRepository: ISpecificationRepository
  ) {}

  async execulte({ name, description }: IRequest): Promise<void> {
    const specificationAlredyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error('Specification alredy Exists');
    }

    await this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
