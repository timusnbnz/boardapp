import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Post()
  createTeam(@Body() body: { name: string }) {
    return this.teamService.createTeam(body);
  }

  @Get(':id')
  getTeamById(@Param('id') id: string) {
    return this.teamService.getTeamById(id);
  }
}