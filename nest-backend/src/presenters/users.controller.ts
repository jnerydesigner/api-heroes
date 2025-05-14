import { UserCreateDTO, UserLoginDTO } from '@application/dtos/users.dto';
import { UsersService } from '@application/services/users.service';
import { Public } from '@infra/decorators/is_public';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/email')
  async findByEmail(@Body() body: UserLoginDTO) {
    return this.usersService.findOne(body.email);
  }

  @Public()
  @Post('/create')
  async createUser(@Body() body: UserCreateDTO) {
    return this.usersService.createUser(body);
  }
}
