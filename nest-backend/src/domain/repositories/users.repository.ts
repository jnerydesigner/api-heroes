import { UsersModel } from '@domain/model/users.model';
import { Users } from '@prisma/client';

export interface UsersRepository {
  create(user: UsersModel): Promise<Users>;
  findAll(): Promise<UsersModel[]>;
  findById(id: string): Promise<UsersModel | null>;
  findByEmail(email: string): Promise<Users | null>;
  update(id: string, user: UsersModel): Promise<UsersModel | null>;
  delete(id: string): Promise<boolean>;
}
