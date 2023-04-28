import { createUser, User } from './User';

describe('User', () => {
  it('should create a new user', () => {
    const user = createUser(1, 'John Doe', 'john@doe');
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@doe');
  });
});
