import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { PrismaService } from '../../prisma.service';

/**
 * Modul für die Team-Verwaltungsfunktionalität
 */
@Module({
  controllers: [TeamController],
  providers: [TeamService, PrismaService],
})
export class TeamModule {}