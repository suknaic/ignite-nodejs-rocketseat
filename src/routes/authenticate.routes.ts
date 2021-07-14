import { Router } from 'express';

import { CreateAuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/CreateAuthenticateUserController';

const authenticateRoutes = Router();

const createAuthenticateUserController = new CreateAuthenticateUserController();

authenticateRoutes.post('/sessions', createAuthenticateUserController.handle);

export { authenticateRoutes };
