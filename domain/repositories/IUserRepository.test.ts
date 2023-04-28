import { IUserRepository } from './IUserRepository';
import { createUser } from "../entities/User";
export const mockUserRepository: jest.Mocked<IUserRepository> = {
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
