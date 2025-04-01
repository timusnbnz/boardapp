import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./ui-components/navbar/navbar.component";
import { TaskFormComponent } from "./ui-components/task-form/task-form.component";
import { LoginRegisterComponent } from "./ui-components/login-register/login-register.component";
import { TodoViewComponent } from "./ui-components/todo-view/todo-view.component";
import { BoardComponent } from "./ui-components/board/board.component";

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    TaskFormComponent,
    LoginRegisterComponent,
    TodoViewComponent,
    BoardComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
