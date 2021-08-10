import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/User';
import { IUSerRepository } from '../IUserRepository';

class FakeUserRepository implements IUSerRepository {
  private repository: User[];

  constructor() {
    this.repository = [];
  }

  async create({
    name,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      driver_license,
      email,
      password,
    });

    this.repository.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    const userFinded = this.repository.find((user) => user.email === email);

    return userFinded;
  }
  async findById(id: string): Promise<User> {
    const userFinded = this.repository.find((user) => user.id === id);

    return userFinded;
  }
  async save(user: User): Promise<void> {
    const findIndex = this.repository.findIndex(
      (usuario) => usuario.id === user.id
    );

    this.repository[findIndex] = user;
  }
}

export { FakeUserRepository };
