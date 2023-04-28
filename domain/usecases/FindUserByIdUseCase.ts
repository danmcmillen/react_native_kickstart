import { UserRepository } from '../repositories/UserRepository';
export class FindUserByIdUseCase {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  async execute(id: number) {
    return await this.userRepository.findUserById(id);
  }
}
