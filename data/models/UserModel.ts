import { User } from '../../domain/entities/User';
export class UserModel {
  private readonly id: number;
  private readonly name: string;
  private readonly email: string;
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  toEntity() {
    return new User(this.id, this.name, this.email);
  }
}
