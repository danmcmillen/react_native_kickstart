import { User } from '../entities/user';
export interface UserRepository {
  findUserById(id: number): Promise<User | null>;
}
