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
  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloWorldService.getHelloWorldMessage().subscribe(
      (message) => console.log(message),
      (error) => console.error('Error fetching message:', error)
    );
  }
}
