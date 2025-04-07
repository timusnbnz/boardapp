import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui-components/navbar/navbar.component";
import { HelloWorldService } from './services/helloworld.service';
import { HttpClientModule } from '@angular/common/http';

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
  links = [
    { label: 'Home', path: '/' },
    { label: 'Account', path: '/account' },
    { label: 'Board', path: '/board' },
    { label: 'Settings', path: '/settings' },
    { label: 'Tasks', path: '/tasks' },
    { label: 'Team', path: '/team' }
  ];

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getHelloWorldMessage().subscribe(
      (message) => console.log(message),
      (error) => console.error('Error fetching message:', error)
    );
  }
}
