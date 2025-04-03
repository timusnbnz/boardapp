import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTeams() {
    return this.prisma.team.findMany();
  }

  createTeam(data: { name: string }) {
    return this.prisma.team.create({ data });
  }

  getTeamById(id: string) {
    return this.prisma.team.findUnique({ where: { id } });
  }
}