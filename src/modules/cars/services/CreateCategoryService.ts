import CategoriRepository from '../repositories/fake/CategoriRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriRepository: CategoriRepository) {}
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

export default CreateCategoryService;
