import { UserRepositoryImpl } from './UserRepositoryImpl';
import { UserModel } from '../models/UserModel';

describe('UserRepositoryImpl', () => {
  it('should find a user by id', async () => {
    const dataSource = {
      fetchUserById: jest
        .fn()
        .mockReturnValue(new UserModel(1, 'John Doe', 'john@doe.com')),
    };
    const userRepository = new UserRepositoryImpl(dataSource);
    const user = await userRepository.findUserById(1);
    expect(user?.id).toBe(1);
    expect(user?.name).toBe('John Doe');
    expect(user?.email).toBe('john@doe.com');
  });
});
