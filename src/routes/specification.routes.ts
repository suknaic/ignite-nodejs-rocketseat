import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationRouter = Router();

specificationRouter.use(ensureAuthenticated);
specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
