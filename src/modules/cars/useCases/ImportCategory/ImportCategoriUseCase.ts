import csvParser from 'csv-parser';
import fs from 'fs';

class ImportCategoryUseCase {
  execulte(file: Express.Multer.File): void {
    const parse = csvParser({
      separator: ',',
    });
    const stream = fs.createReadStream(file.path);

    stream.pipe(parse);

    parse.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
