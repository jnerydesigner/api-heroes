import { UserCreateDTO } from '@application/dtos/users.dto';
import { UsersModel } from '@domain/model/users.model';
import { UsersRepository } from '@domain/repositories/users.repository';
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private salt: number = 10;
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: UsersRepository,
  ) {}

  async findOne(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }

  async createUser(user: UserCreateDTO) {
    const password = await bcrypt.hash(user.password, this.salt);
    const userInput = UsersModel.create({ ...user, password });
    const userCreated = await this.usersRepository.create(userInput);
    return new UsersModel(
      userCreated.id,
      userCreated.name,
      userCreated.email,
      userCreated.password,
    );
  }

  async comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
