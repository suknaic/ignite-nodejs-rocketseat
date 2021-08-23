import { Router } from 'express';
import { CreateCarController } from '@modules/cars/useCases/CreateCar/CreateCarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.use(ensureAuthenticated);
carsRoutes.post('/', ensureAdmin, createCarController.handle);

export { carsRoutes };
