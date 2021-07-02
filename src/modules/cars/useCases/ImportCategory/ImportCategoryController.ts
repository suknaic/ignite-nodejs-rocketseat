import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoriUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execulte(file);

    return response.send();
  }
}

export { ImportCategoryController };
