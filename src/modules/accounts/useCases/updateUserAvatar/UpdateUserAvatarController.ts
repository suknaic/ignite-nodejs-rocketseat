import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUseAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const avatar_file = request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUseAvatarUseCase);

    await updateUserAvatarUseCase.execulte({ user_id, avatar_file });

    return response.status(201).send();
  }
}

export { UpdateUserAvatarController };
