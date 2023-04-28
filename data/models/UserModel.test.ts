import { UserModel } from './UserModel';

describe('UserModel', () => {
  it('should create a user', () => {
    const userModel = new UserModel(1, 'John Doe', 'john@doe.com');
    const user = userModel.toEntity();
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@doe.com');
  });
});
