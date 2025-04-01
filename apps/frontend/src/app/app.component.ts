import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui-components/navbar/navbar.component";

@Component({
  imports: [
    RouterModule,
    NavbarComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
