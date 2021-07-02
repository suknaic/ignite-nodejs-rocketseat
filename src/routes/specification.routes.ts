import { Router } from 'express';

import SpecificationRepository from '../modules/cars/repositories/fake/SpecificationRepository';
import CreateSpecificationService from '../modules/cars/services/CreeateSpecificationService';

const specificationRouter = Router();

const specificationRepository = new SpecificationRepository();

specificationRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  specificationService.execulte({
    name,
    description,
  });

  return response.status(201).send();
});

export { specificationRouter };
