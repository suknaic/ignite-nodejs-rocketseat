import { Router } from 'express';

import { categoriRoutes } from './categori.routes';
import { specificationRouter } from './specification.routes';

const routes = Router();

routes.use('/categories', categoriRoutes);
routes.use('/specifications', specificationRouter);

export { routes };
