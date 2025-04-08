import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/auth';
  private loggedInSubject: BehaviorSubject<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
    this.loggedInSubject = new BehaviorSubject<boolean>(this.cookieService.check('accessToken'));
    this.loggedIn$ = this.loggedInSubject.asObservable();
  }
  
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.accessToken) {
          this.cookieService.set('accessToken', response.accessToken);
          this.updateLoggedInStatus();
          this.router.navigate(['/']);
        }
      })
    );
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

  updateLoggedInStatus(): void {
    const isLoggedIn = this.cookieService.check('accessToken');
    this.loggedInSubject.next(isLoggedIn);
  }

  logout(): void {
    this.cookieService.delete('accessToken', '/');
    this.updateLoggedInStatus();
  }
}