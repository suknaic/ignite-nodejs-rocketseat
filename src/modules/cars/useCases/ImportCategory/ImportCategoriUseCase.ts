import csvParser from 'csv-parser';
import fs from 'fs';

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
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
          resolve(categories);
        })
        .on('error', (err) => reject(err));
    });
  }
  async execulte(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);

    console.log(categories);
  }
}

export { ImportCategoryUseCase };
