import {User} from "../entities/User";
export interface UserRepository {
    findUserById(id: number): Promise<User | null>;
}
