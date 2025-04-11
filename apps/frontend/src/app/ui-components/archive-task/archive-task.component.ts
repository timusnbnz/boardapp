import { Component, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces';

@Component({
  selector: 'ui-archive-task',
  imports: [],
  templateUrl: './archive-task.component.html',
  styleUrl: './archive-task.component.css',
})
export class ArchiveTaskComponent {
  constructor(private taskService: TasksService) {}
  @Input() task: Task = { id: '', title: '', description: '', status: '' };
  isModalVisible = false;

  async archiveTask() {
    if (!this.task.id) return;
    this.task.status = 'archive';
    await this.taskService.updateTask(this.task.id, this.task);
  }
}
