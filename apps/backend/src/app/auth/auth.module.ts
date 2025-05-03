import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../prisma.service';

// Lädt Umgebungsvariablen aus der .env-Datei im Projektroot
dotenv.config({ path: '../../../.env' });

/**
 * Authentifizierungsmodul: Konfiguriert JWT mit 1h Gültigkeitsdauer
 */
@Module({
  imports: [PassportModule, JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '1h' } })],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
