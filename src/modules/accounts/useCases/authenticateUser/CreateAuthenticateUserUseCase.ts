import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import { IUSerRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
    name: string;
  };
  token: string;
}

@injectable()
class CreateAuthenticateUserUseCase {
  constructor(
    @inject('IUSerRepository')
    private userRepository: IUSerRepository
  ) {}

  async execulte({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or Password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or Password incorrect!');
    }

    const token = sign({}, '69C6E4A394B794AC45A4CA63761BFF01', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}

export { CreateAuthenticateUserUseCase };
