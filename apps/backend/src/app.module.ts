import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * Datenbankzugriffsmodul - stellt den Prisma-Service für andere Module bereit
 */
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}