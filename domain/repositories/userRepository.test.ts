import { UserRepository } from './userRepository';
import { createUser } from '../entities/user';
export const mockUserRepository: jest.Mocked<UserRepository> = {
  findUserById: jest.fn(),
};

describe('UserRepository', () => {
  it('should find user by id', async () => {
    const user = createUser(1, 'John Doe', 'john@doe.com');
    mockUserRepository.findUserById.mockResolvedValueOnce(user);
    const result = await mockUserRepository.findUserById(1);
    expect(result).toEqual(user);
  });
});
