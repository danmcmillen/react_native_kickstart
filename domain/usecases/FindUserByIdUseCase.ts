import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

export type FindUserByIdUseCase = {
  execute: (id: number) => Promise<User | null>;
};

const createFindUserByIdUseCase = (
  userRepository: IUserRepository
): FindUserByIdUseCase => {
  const execute = async (id: number) => {
    return await userRepository.findUserById(id);
  };
  return {
    execute,
  };
};

export default createFindUserByIdUseCase;
