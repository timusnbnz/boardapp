import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TeamService, Team } from '../../services/team.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'page-team',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[] = [];
  newTeamName: string = '';
  showNewTeamForm: boolean = false;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teamService.getUserTeams().subscribe({
      next: (teams) => {
        this.teams = teams;
      },
      error: (error) => {
        console.error('Error loading teams', error);
      }
    });
  }

  toggleNewTeamForm(): void {
    this.showNewTeamForm = !this.showNewTeamForm;
  }

  createTeam(): void {
    if (!this.newTeamName.trim()) {
      // Name darf nicht leer sein
      return;
    }
    
    this.teamService.createTeam(this.newTeamName).subscribe({
      next: (team) => {
        this.teams.push(team);
        this.newTeamName = '';
        this.showNewTeamForm = false;
      },
      error: (error) => {
        console.error('Error creating team', error);
      }
    });
  }
}
