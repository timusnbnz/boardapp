import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = '/api/tasks';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTask(task: { title: string; description?: string; userId: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, task);
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}