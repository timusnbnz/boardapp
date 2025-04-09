import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui-components/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    HttpClientModule
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn = false;
  links: { label: string; path: string }[] = [];

  constructor(private authService: AuthService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
      this.updateLinks();
      this.changeDetectorRef.detectChanges();
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
        { label: 'Login', path: '/login' },
      ];
    }
  }
}
