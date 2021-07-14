import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRouter = Router();

const avatarUpload = Multer(uploadConfig.upload('avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserController.handle);

usersRouter.use(ensureAuthenticated);

usersRouter.patch(
  '/avatar',
  avatarUpload.single('avatar'),
  updateUserAvatarController.handle
);

export { usersRouter };
