import { UserService } from './ServiceContext';
import createFindUserByIdUseCase from '../../domain/usecases/findUserByIdUseCase';
import userApiDataSource from '../../data/datasources/userApiDataSource';
import createUserRepository from '../../data/repositories/userRepositoryImpl';

export interface CompositionRoot {
  userService: UserService;
}

export const createCompositionRoot = (): CompositionRoot => {
  return {
    userService: {
      findUserByIdUseCase: createFindUserByIdUseCase(
        createUserRepository(userApiDataSource)
      ),
    },
  };
};
