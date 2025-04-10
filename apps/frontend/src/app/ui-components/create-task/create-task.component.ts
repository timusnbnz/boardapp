import { Component, Input, ChangeDetectorRef, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'ui-create-task',
imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(private taskService: TasksService){}

  @Input() status: string = '';
  title: string = '';
  description: string = '';
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  saveTask() {
    const newTask: Task = {
      title: this.title,
      description: this.description,
      status: this.status
    };
    console.log('Task saved:', newTask);
    this.taskService.createTask(newTask).then(() => {
      console.log('Task created successfully');
    }).catch((error) => {
      console.error('Error creating task:', error);
    });
    this.closeModal();
  }
}
