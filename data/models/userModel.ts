import { createUser, User } from '../../domain/entities/user';

type UserModel = Readonly<{
  id: number;
  name: string;
  email: string;
}>;

const createUserModel = (
  id: number,
  name: string,
  email: string
): UserModel => ({
  id,
  name,
  email,
});

const toEntity = (userModel: UserModel): User =>
  createUser(userModel.id, userModel.name, userModel.email);

export { UserModel, createUserModel, toEntity };
