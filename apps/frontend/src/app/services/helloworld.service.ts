import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getHelloWorldMessage(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/`);
  }
}