import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { LoginformComponent } from "../../ui-components/loginform/loginform.component";
import { AuthService } from '../../services/auth.service';
import { LoginModalComponent } from "../../ui-components/login-modal/login-modal.component";

@Component({
  selector: 'page-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, LoginformComponent, LoginModalComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Input() links: { label: string; path: string }[] = [];
  isLoggedIn = false;
  showLoginModal = false; 

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }
  
  toggleLoginModal(): void {
    this.showLoginModal = !this.showLoginModal;
  }
}
