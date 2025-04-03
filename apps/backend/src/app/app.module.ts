import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
