import { Component, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-edit-task',
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  constructor(private taskService: TasksService) {}

  @Input() task: Task = { id: '', title: '', description: '', status: '' };
  isModalVisible = false;

  openModal = () => (this.isModalVisible = true);
  closeModal = () => (this.isModalVisible = false);

  async saveTask() {
    if (!this.task.id) return;
    await this.taskService.updateTask(this.task.id, this.task);
    this.closeModal();
  }
}
