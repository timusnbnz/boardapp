import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Task } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = '/api/tasks/';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  async getAllTasks(status: String): Promise<any> {
    try {
      const response = await this.http
        .get(`${this.baseUrl}getTasks?status=${status}`, { headers: this.authService.getAuthHeader() })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createTask(task: Task): Promise<any> {
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

  async getTaskById(id: string): Promise<any> {
    try {
      const response = await this.http
        .get(`${this.baseUrl}get?id=${id}`, { headers: this.authService.getAuthHeader() })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateTask(id: string, task: Partial<Task>): Promise<any> {
    try {
      const response = await this.http
        .post(`${this.baseUrl}updateTask?id=${id}`, task, {
          headers: this.authService.getAuthHeader(),
        })
        .toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
