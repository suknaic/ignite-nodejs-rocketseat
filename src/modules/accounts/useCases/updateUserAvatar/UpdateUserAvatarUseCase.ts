import { inject, injectable } from 'tsyringe';

import { IUSerRepository } from '../../repositories/IUserRepository';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUseAvatarUseCase {
  constructor(
    @inject('IUSerRepository')
    private userRepository: IUSerRepository
  ) {}

  async execulte({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    user.avatar = avatar_file;

    await this.userRepository.save(user);
  }
}

export { UpdateUseAvatarUseCase };
