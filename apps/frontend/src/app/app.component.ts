import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './ui-components/header/header.component';
import { LoginRegisterComponent } from './ui-components/login-register/login-register.component';
import { TodoViewComponent } from './ui-components/todo-view/todo-view.component';
import { KanbanBoardComponent } from './ui-components/kanban-board/kanban-board.component';
import { TaskFormComponent } from './ui-components/task-form/task-form.component';

@Component({
  imports: [
    RouterModule,
    HeaderComponent,
    LoginRegisterComponent,
    TodoViewComponent,
    KanbanBoardComponent,
    TaskFormComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
