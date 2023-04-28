import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { UserApiDataSource } from '../data_sources/UserApiDataSource';
export class UserRepositoryImpl implements UserRepository {
  private dataSource: UserApiDataSource;
  constructor(dataSource: UserApiDataSource) {
    this.dataSource = dataSource;
  }
  async findUserById(id: number): Promise<User | null> {
    const userModel = await this.dataSource.fetchUserById(id);
    return userModel.toEntity();
  }
}
