import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const categories = this.listCategoryUseCase.execulte();

    return response.status(200).json(categories);
  }
}

export { ListCategoryController };
