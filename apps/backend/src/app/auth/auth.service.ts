import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma.service';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async login(email: string): Promise<{ accessToken: string }> {
    const payload = { email };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async register(name: string, email: string, password: string): Promise<any> {
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { statusCode: 409, message: 'Email already in use' };
    }

    const hashedPassword = await this.hashPassword(password);
    const user = await this.prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    return { statusCode: 201, id: user.id, name: user.name, email: user.email };
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async validateCredentials(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return { statusCode: 404, message: 'User not found' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { statusCode: 401, message: 'Invalid credentials' };
    }

    return { statusCode: 200, id: user.id, name: user.name, email: user.email };
  }

  async sendPasswordResetMail(email: string): Promise<{ statusCode: number; message: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { statusCode: 404, message: 'User not found' };
    }

    const resetToken = this.generateResetToken();
    await this.emailService.sendPasswordResetEmail(email, resetToken);

    return { statusCode: 200, message: 'Password reset email sent successfully' };
  }

  private generateResetToken(): string {
    return Math.random().toString(36).substr(2, 8);
  }
}
