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
  async findAll(): Promise<UsersModel[]> {
    const users = await this.prismaService.users.findMany();
    return users.map(
      (user) =>
        new UsersModel(
          user.id,
          user.name,
          user.email,
          user.password,
          user.github,
          user.createdAt,
          user.updatedAt,
        ),
    );
  }
  async findById(id: string): Promise<UsersModel | null> {
    const user = await this.prismaService.users.findUnique({
      where: { id },
    });
    if (!user) {
      return null;
    }
    return new UsersModel(
      user.id,
      user.name,
      user.email,
      user.password,
      user.github,
      user.createdAt,
      user.updatedAt,
    );
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

  async update(id: string, user: UsersModel): Promise<UsersModel | null> {
    const userUpdated = await this.prismaService.users.update({
      where: { id },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        github: user.github,
      },
    });

    if (!userUpdated) {
      return null;
    }

    return new UsersModel(
      userUpdated.id,
      userUpdated.name,
      userUpdated.email,
      userUpdated.password,
      userUpdated.github,
      userUpdated.createdAt,
      userUpdated.updatedAt,
    );
  }
  async delete(id: string): Promise<boolean> {
    try {
      await this.prismaService.users.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false; // Caso o usuário não seja encontrado, retorna false
    }
  }
}
