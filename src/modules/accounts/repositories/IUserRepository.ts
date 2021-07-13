import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUSerRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUSerRepository };
