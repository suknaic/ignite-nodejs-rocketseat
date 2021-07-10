import csvParser from 'csv-parser';
import fs from 'fs';

import { ICategoriRepository } from '../../repositories/ICategoriRepository';

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriRepository) {}
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

      const categoryAlredyExists = await this.categoryRepository.findByName(
        name
      );

      if (!categoryAlredyExists) {
        await this.categoryRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
