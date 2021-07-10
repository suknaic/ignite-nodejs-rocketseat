import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoriUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.importCategoryUseCase.execulte(file);

    return response.send();
  }
}

export { ImportCategoryController };
