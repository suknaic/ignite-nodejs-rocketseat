import { Router } from 'express';

import { categoriRoutes } from './categori.routes';
import { specificationRouter } from './specification.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/categories', categoriRoutes);
routes.use('/specifications', specificationRouter);
routes.use('/users', usersRouter);

export { routes };
