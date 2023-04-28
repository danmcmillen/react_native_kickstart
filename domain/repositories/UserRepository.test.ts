import { UserRepository } from './UserRepository';
import { User } from '../entities/User';
export const mockUserRepository: jest.Mocked<UserRepository> = {
  findUserById: jest.fn(),
};

describe('UserRepository', () => {
  it('should find user by id', async () => {
    const user = new User(1, 'John Doe', 'john@doe.com');
    mockUserRepository.findUserById.mockResolvedValueOnce(user);
    const result = await mockUserRepository.findUserById(1);
    expect(result).toEqual(user);
  });
});
