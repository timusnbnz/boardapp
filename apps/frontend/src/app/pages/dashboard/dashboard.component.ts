import { Component } from '@angular/core';
import { BoardComponent } from '../../ui-components/board/board.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'page-dashboard',
  imports: [BoardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private taskService: TasksService,
  ) {}
  
  test() {
    this.taskService.createTask({
      title: 'Fortnite',
      description: 'Battle Royale',
      status: 'done'
    });
  }
}
