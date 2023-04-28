import { UserApiDataSource } from './UserApiDataSource';

describe('UserApiDataSource', () => {
  it('should fetch a user by id', async () => {
    const userApiDataSource = new UserApiDataSource();
    const userModel = await userApiDataSource.fetchUserById(1);
    const user = userModel.toEntity();
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
  });
});
