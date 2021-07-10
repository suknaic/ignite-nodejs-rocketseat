import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationRouter = Router();

specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
