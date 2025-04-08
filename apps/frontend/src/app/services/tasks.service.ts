import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Task } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = '/api/tasks/';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getAllTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTask(task: Task): boolean {
    this.http
      .post(this.baseUrl + 'createTask', task, {
        headers: this.authService.getAuthHeader(),
      })
      .subscribe(
        (response) => {
          console.log('Full Response:', response);
          return true;
        },
        (error) => {
          console.error('Error fetching tasks:', error);
        },
      );
    return false;
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
