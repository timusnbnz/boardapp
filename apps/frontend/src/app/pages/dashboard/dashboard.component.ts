import { Component } from '@angular/core';
import { BoardComponent } from '../../ui-components/board/board.component';
import { TasksService } from '../../services/tasks.service';
import { CreateTaskComponent } from '../../ui-components/create-task/create-task.component';
import { VelocitygraphComponent } from '../../ui-components/velocitygraph/velocitygraph.component';
import { BoardstatisticsComponent } from '../../ui-components/boardstatistics/boardstatistics.component';

@Component({
  selector: 'page-dashboard',
  imports: [BoardComponent, VelocitygraphComponent, BoardstatisticsComponent],
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
