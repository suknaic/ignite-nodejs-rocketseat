import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableCarsUseCase } from './listAvailableCarsUseCase';

class ListAvailableCarsController {
  async handle(request: Request, response: Response) {
    const { name, brand, category_id } = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const carsAvailables = await listAvailableCarsUseCase.execulte({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return response.status(200).json(carsAvailables);
  }
}

export { ListAvailableCarsController };
