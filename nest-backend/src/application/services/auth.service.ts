import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, passwordInput: string) {
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordCompare = await this.usersService.comparePassword(
      passwordInput,
      user.password,
    );

    if (!passwordCompare) {
      throw new UnauthorizedException();
    }
    const usernameGitHub = this.extractUsernameFromGitHubUrl(user.github);
    const imageGitHub = `https://github.com/${usernameGitHub}.png`;

    const payload = { sub: user.id, username: user.email, image: imageGitHub };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  extractUsernameFromGitHubUrl(url: string) {
    const cleanUrl = url.replace(/\/$/, '');

    const parts = cleanUrl.split('/');
    return parts[parts.length - 1];
  }
}
