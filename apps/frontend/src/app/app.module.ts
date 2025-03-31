import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './ui-components/login-register/login-register.component';
import { TodoViewComponent } from './ui-components/todo-view/todo-view.component';
import { KanbanBoardComponent } from './ui-components/kanban-board/kanban-board.component';
import { TaskFormComponent } from './ui-components/task-form/task-form.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    TodoViewComponent,
    KanbanBoardComponent,
    TaskFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}