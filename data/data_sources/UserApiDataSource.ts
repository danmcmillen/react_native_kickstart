import { UserModel } from '../models/UserModel';
export class UserApiDataSource {
  async fetchUserById(id: number) {
    // Simulate an API call
    const userData = {
      id,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    return new UserModel(userData.id, userData.name, userData.email);
  }
}
