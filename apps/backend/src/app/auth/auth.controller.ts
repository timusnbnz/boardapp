import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * Controller für Authentifizierungsfunktionen (Login/Register)
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const result = await this.authService.validateCredentials(body.email, body.password);
    // Nur bei erfolgreicher Validierung wird ein Token generiert
    if (result.statusCode !== 200) return result;
    return this.authService.login(result.email);
  }

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    const result = await this.authService.register(body.name, body.email, body.password);
    return { statusCode: result.statusCode, message: result.message };
  }

  @Get('test')
  // Hinweis: Nur für Testzwecke, nicht in Produktion verwenden
  getJwtFromHeader(@Req() req: any) {
    return this.authService.getUserIdFromRequest(req);
  }
}
