import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces';

@Component({
  selector: 'ui-view-task',
  imports: [FormsModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css',
})
export class ViewTaskComponent {
  @Input() task: Task = { title: '', description: '', status: '' };
  isModalVisible = false;

  openModal = () => (this.isModalVisible = true);
  closeModal = () => (this.isModalVisible = false);
}
