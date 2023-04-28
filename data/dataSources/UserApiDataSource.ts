import { createUserModel, UserModel } from '../models/UserModel';

export type UserApiDataSource = {
  fetchUserById: (id: number) => UserModel;
};

const userApiDataSource: UserApiDataSource = {
  fetchUserById: (id: number): UserModel => {
    // Simulate an API call
    const userData = {
      id,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    return createUserModel(userData.id, userData.name, userData.email);
  },
};

export default userApiDataSource;
