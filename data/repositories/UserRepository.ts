import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/entities/User';
import { UserApiDataSource } from '../dataSources/UserApiDataSource';
import { toEntity, UserModel } from '../models/UserModel';

const createUserRepository = (
  userApiDataSource: UserApiDataSource
): IUserRepository => {
  const findUserById = async (id: number): Promise<User | null> => {
    const userModel: UserModel = await userApiDataSource.fetchUserById(id);
    return toEntity(userModel);
  };
  return {
    findUserById,
  };
};

export default createUserRepository;
