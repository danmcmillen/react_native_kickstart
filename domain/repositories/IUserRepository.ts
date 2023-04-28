import { User } from '../entities/User';
export interface IUserRepository {
  findUserById(id: number): Promise<User | null>;
}
