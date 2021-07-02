import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreeateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execulte({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
