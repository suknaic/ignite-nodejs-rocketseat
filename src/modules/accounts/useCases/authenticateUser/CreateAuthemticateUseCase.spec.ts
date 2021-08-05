import { AppError } from '../../../../error/AppError';
import { FakeUserRepository } from '../../repositories/fakes/FakeUserRepository';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { CreateAuthenticateUserUseCase } from './CreateAuthenticateUserUseCase';

let userRepository: FakeUserRepository;
let createUserUseCase: CreateUserUseCase;
let createAuthenticateUserUseCase: CreateAuthenticateUserUseCase;

describe('User Authentication', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
    createAuthenticateUserUseCase = new CreateAuthenticateUserUseCase(
      userRepository
    );
  });

  it('should be able to authenticate user ', async () => {
    await createUserUseCase.execulte({
      name: 'user test',
      email: 'test@test.com',
      password: '123456',
      driver_license: '12345',
    });

    const authenticateUser = await createAuthenticateUserUseCase.execulte({
      email: 'test@test.com',
      password: '123456',
    });

    expect(authenticateUser).toHaveProperty('token');
  });

  it('should not be able to authenticate no existentent user', async () => {
    await expect(
      createAuthenticateUserUseCase.execulte({
        email: 'jhondoe@gmaill.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await createUserUseCase.execulte({
      name: 'user test',
      email: 'test@test.com',
      password: '123456',
      driver_license: '12345',
    });

    await expect(
      createAuthenticateUserUseCase.execulte({
        email: 'test@test.com',
        password: 'wrong-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
