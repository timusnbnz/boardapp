import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './ui-components/login-register/login-register.component';
import { TodoViewComponent } from './ui-components/todo-view/todo-view.component';
import { KanbanBoardComponent } from './ui-components/kanban-board/kanban-board.component';
import { TaskFormComponent } from './ui-components/task-form/task-form.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';

@Component({
  imports: [
    RouterModule,
    LoginRegisterComponent,
    TodoViewComponent,
    KanbanBoardComponent,
    TaskFormComponent,
    NavbarComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
