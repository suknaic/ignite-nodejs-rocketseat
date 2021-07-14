import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

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
    throw new Error('Token missing');
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
      throw new Error('User no existis');
    }

    next();
  } catch {
    throw new Error('Token invalid');
  }
}
