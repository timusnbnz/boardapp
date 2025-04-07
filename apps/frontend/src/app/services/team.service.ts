import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = '/api/team';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTeam(team: { name: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, team);
  }

  getTeamById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}