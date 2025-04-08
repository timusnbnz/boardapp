import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async login(email: string): Promise<{ statusCode: number; accessToken?: string; message?: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return { statusCode: 404, message: 'User not found' };
    const accessToken = this.jwtService.sign({ id: user.id });
    return { statusCode: 201, accessToken };
  }

  async register(name: string, email: string, password: string): Promise<any> {
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) return { statusCode: 409, message: 'Email already in use' };
    const hashedPassword = await this.hashPassword(password);
    await this.prisma.user.create({ data: { name, email, password: hashedPassword } });
    return { statusCode: 201 };
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validateCredentials(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return { statusCode: 404, message: 'User not found' };
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return { statusCode: 401, message: 'Invalid credentials' };
    return { statusCode: 200, id: user.id, name: user.name, email: user.email };
  }

  getUserIdFromRequest(req: any): { statusCode: number; id?: string; message?: string } {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) return { statusCode: 401, message: 'Auth invalid' };
    const decoded = this.jwtService.decode(authHeader.split(' ')[1]);
    if (!decoded || !decoded['id']) return { statusCode: 401, message: 'Invalid token or missing id' };
    return { statusCode: 200, id: decoded['id'] };
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
