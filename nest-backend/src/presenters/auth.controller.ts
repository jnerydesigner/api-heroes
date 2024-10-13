import { AuthService } from '@application/services/auth.service';
import { AuthGuard } from '@infra/auth/auth.guard';
import { Public } from '@infra/decorators/is_public';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request, Req } from '@nestjs/common';
import { Request as expressRequest } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.login(signInDto.email, signInDto.password);
    }

    @Get('profile')
    getProfile(@Request() req: expressRequest) {
        return req.user;
    }
}
