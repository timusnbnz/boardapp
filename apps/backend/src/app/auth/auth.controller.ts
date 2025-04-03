import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateCredentials(body.email, body.password);
    return this.authService.login(user.email);
  }

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    const user = await this.authService.register(body.name, body.email, body.password);
    return user;
  }

  @Post('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Request() req) {
    return req.user;
  }
}