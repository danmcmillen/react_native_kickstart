import { createUserModel } from "../models/UserModel";
import { UserApiDataSource } from "../dataSources/UserApiDataSource";
import createUserRepository from "./UserRepository";


describe('UserRepositoryImpl', () => {
  it('should find a user by id', async () => {
    const dataSource: UserApiDataSource = {
      fetchUserById: jest
        .fn()
        .mockReturnValue(createUserModel(1, 'John Doe', 'john@doe.com')),
    };
    const userRepository = createUserRepository(dataSource)
    const user = await userRepository.findUserById(1);
    expect(user?.id).toBe(1);
    expect(user?.name).toBe('John Doe');
    expect(user?.email).toBe('john@doe.com');
  });
});
