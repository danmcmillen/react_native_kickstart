import { createUserModel, toEntity, UserModel } from './UserModel';

describe('UserModel', () => {
  it('should create a user model', () => {
    const userModel = createUserModel(1, 'John Doe', 'john@doe.com');
    expect(userModel.id).toBe(1);
    expect(userModel.name).toBe('John Doe');
    expect(userModel.email).toBe('john@doe.com');
  });

  it('should convert a user model to an entity', () => {
    const userModel: UserModel = {
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com',
    };
    const user = toEntity(userModel);
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@doe.com');
  });
});
