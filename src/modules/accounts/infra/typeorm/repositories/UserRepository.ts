import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUSerRepository } from '@modules/accounts/repositories/IUserRepository';

class UserRepository implements IUSerRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async create({
    name,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }

  async save(user: User): Promise<void> {
    await this.repository.save(user);
  }
}

export { UserRepository };
