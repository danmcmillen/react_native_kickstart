import { UserRepository } from '../repositories/userRepository';
import { User } from '../entities/user';

export type FindUserByIdUseCase = {
  execute: (id: number) => Promise<User | null>;
};

const createFindUserByIdUseCase = (
  userRepository: UserRepository
): FindUserByIdUseCase => {
  const execute = async (id: number) => {
    return await userRepository.findUserById(id);
  };
  return {
    execute,
  };
};

export default createFindUserByIdUseCase;
