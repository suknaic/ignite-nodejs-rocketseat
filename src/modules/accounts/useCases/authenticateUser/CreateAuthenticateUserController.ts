import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAuthenticateUserUseCase } from './CreateAuthenticateUserUseCase';

class CreateAuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const createAuthenticateUserUseCase = container.resolve(
      CreateAuthenticateUserUseCase
    );

    const { user, token } = await createAuthenticateUserUseCase.execulte({
      email,
      password,
    });

    return response.json({ user, token });
  }
}

export { CreateAuthenticateUserController };
