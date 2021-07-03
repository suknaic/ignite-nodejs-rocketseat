import csvParser from 'csv-parser';
import fs from 'fs';

import CategoryRepository from '../../repositories/fake/CategoriRepository';

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}
  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parse = csvParser();

      stream.pipe(parse);

      parse
        .on('data', async (line) => {
          categories.push(line);
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => reject(err));
    });
  }
  async execulte(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlredyExists = this.categoryRepository.findByName(name);

      if (!categoryAlredyExists) {
        this.categoryRepository.create({ name, description });
      }
    });

    console.log(categories);
  }
}

export { ImportCategoryUseCase };
