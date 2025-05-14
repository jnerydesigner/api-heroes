import { UsersModel } from '@domain/model/users.model';
import { UsersRepository } from '@domain/repositories/users.repository';
import { PrismaService } from '../client/prisma.service';
import { Users } from '@prisma/client';

export class UsersPrismaRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(user: UsersModel): Promise<Users> {
    const userCreated = await this.prismaService.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        github: user.github,
      },
    });

    return userCreated;
  }
  findAll(): Promise<UsersModel[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<UsersModel | null> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<Users | null> {
    const userExists = await this.prismaService.users.findUnique({
      where: {
        email: email,
      },
    });
    if (!userExists) {
      return null;
    }

    console.log(userExists);

    return userExists;
  }

  update(id: string, user: UsersModel): Promise<UsersModel | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
