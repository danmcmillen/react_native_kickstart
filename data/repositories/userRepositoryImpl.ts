import { UserRepository } from '../../domain/repositories/userRepository';
import { User } from '../../domain/entities/user';
import { UserApiDataSource } from '../datasources/userApiDataSource';
import { toEntity, UserModel } from '../models/userModel';

const createUserRepository = (
  userApiDataSource: UserApiDataSource
): UserRepository => {
  const findUserById = async (id: number): Promise<User | null> => {
    const userModel: UserModel = await userApiDataSource.fetchUserById(id);
    return toEntity(userModel);
  };
  return {
    findUserById,
  };
};

export default createUserRepository;
