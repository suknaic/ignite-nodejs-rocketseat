import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '@error/AppError';
import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const autheHeader = request.headers.authorization;

  if (!autheHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = autheHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      '69C6E4A394B794AC45A4CA63761BFF01'
    ) as IPayload;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(sub);

    if (!user) {
      throw new AppError('User no existis', 401);
    }
    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Token invalid', 401);
  }
}
