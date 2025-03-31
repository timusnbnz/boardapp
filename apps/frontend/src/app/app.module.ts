import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { LoginRegisterComponent } from './ui-components/login-register/login-register.component';
import { TodoViewComponent } from './ui-components/todo-view/todo-view.component';
import { KanbanBoardComponent } from './ui-components/kanban-board/kanban-board.component';
import { TaskFormComponent } from './ui-components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginRegisterComponent,
    TodoViewComponent,
    KanbanBoardComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}