import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execulte({ name, description }: IRequest): void {
    const specificationAlredyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error('Specification alredy Exists');
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
