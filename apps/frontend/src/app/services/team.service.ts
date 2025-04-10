import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Team {
  id: string;
  name: string;
  createdAt: string;
  memberCount?: number;
  taskCount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = '/api/teams';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getUserTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}/user`, {
      headers: this.authService.getAuthHeader()
    });
  }

  getTeamById(id: string): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${id}`, {
      headers: this.authService.getAuthHeader()
    });
  }

  createTeam(name: string): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, { name }, {
      headers: this.authService.getAuthHeader()
    });
  }
}