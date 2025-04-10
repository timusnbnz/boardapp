import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui-components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LandingComponent } from './pages/landing/landing.component'; 

@Component({
  standalone: true, 
  imports: [
    RouterModule,
    NavbarComponent,
    HttpClientModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn = false;
  links: { label: string; path: string }[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
      this.updateLinks();
    });
  }

  private updateLinks(): void {
    if (this.loggedIn) {
      this.links = [
        { label: 'Team', path: '/team' },
        { label: 'Einstellungen', path: '/settings' },
        { label: 'Abmelden', path: '/logout' },
      ];
    } else {
      this.links = [
       
      ];
    }
  }
}
