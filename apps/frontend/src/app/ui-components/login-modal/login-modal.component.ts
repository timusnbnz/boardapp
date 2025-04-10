import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from "../loginform/loginform.component";

@Component({
  selector: 'ui-login-modal',
  standalone: true,
  imports: [CommonModule, LoginformComponent],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();
  
  closeModal(): void {
    this.close.emit();
  }
}
