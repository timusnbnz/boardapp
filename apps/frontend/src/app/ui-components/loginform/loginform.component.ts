import { Component } from '@angular/core';

@Component({
  selector: 'ui-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  toggleForm = false;

  toggleForms(){
    this.toggleForm = !this.toggleForm;
  }
}