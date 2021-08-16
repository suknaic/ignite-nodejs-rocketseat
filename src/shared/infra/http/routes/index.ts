import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriRoutes } from './categori.routes';
import { specificationRouter } from './specification.routes';
import { usersRouter } from './users.routes';
import { carsRoutes } from './cars.route';

const routes = Router();

routes.use(authenticateRoutes);
routes.use('/users', usersRouter);
routes.use('/cars', carsRoutes);
routes.use('/categories', categoriRoutes);
routes.use('/specifications', specificationRouter);

export { routes };
