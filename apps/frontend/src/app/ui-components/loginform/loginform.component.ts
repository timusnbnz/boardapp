import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ui-loginform',
  imports: [FormsModule],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent {
  toggleForm = false;
  error = '';
  formData = { name: '', email: '', password: '', passwordRepeat: '' };

  constructor(private authService: AuthService) {}

  toggleForms() {
    this.toggleForm = !this.toggleForm;
  }

  onSubmit() {
    if (!this.toggleForm) { // Loginformular
      this.authService
        .login({ email: this.formData.email, password: this.formData.password })
        .subscribe(
          (response) => {
            console.log('Login successful:', response);
          },
          (error) => {
            this.error = 'Login fehlgeschlagen. Bitte überprüfen Sie Ihre Daten.';
            console.error('Login failed:', error);
          },
        );
    } else { // Registrierungsformular
      if (this.formData.password !== this.formData.passwordRepeat) {
        this.error = 'Passwörter stimmen nicht überein.';
        return;
      }
      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.password ||
        !this.formData.passwordRepeat
      ) {
        this.error = 'Alle Felder müssen ausgefüllt werden.';
        return;
      }
      if (!this.formData.email.includes('@')) {
        this.error = 'Keine gültige E-Mail-Adresse.';
        return;
      }
      if (this.formData.password.length < 8) {
        this.error = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
        return;
      }
      this.authService
        .register({
          name: this.formData.name,
          email: this.formData.email,
          password: this.formData.password,
        })
        .subscribe(
          (response) => {
            console.log('Registration successful:', response);
            if (response.statusCode === 201) {
              console.log('User registered:', response.user);
              this.authService
                .login({
                  email: this.formData.email,
                  password: this.formData.password,
                })
                .subscribe((error) => {
                  console.error('Login failed:', error);
                });
            }
            if (response.statusCode === 400) {
              this.error =
                'Ungültige Eingaben. Bitte überprüfen Sie Ihre Daten.';
            }
            if (response.statusCode === 409) {
              this.error =
                'Die E-Mail-Adresse wird bereits verwendet. Bitte verwenden Sie eine andere.';
            }
          },
          (error) => {
            this.error =
              'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.';
          },
        );
    }
  }
}
