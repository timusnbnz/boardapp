import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  getProfile(): Observable<any> {
    return this.http.post(`${this.baseUrl}/profile`, {});
  }

  sendPasswordResetMail(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/password-reset`, { email });
  }
}