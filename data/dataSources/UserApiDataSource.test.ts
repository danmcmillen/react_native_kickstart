import userApiDataSource from './UserApiDataSource';

describe('UserApiDataSource', () => {
  it('should fetch a user by id', async () => {
    const user = await userApiDataSource.fetchUserById(1);
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
  });
});
