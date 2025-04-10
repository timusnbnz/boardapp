import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'ui-board',
  imports: [CdkDrag, CdkDropList, NgFor, CreateTaskComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor(private taskService: TasksService) {}

  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  async ngOnInit() {
    this.todo = await this.getTasks('todo');
    this.inProgress = await this.getTasks('inProgress');
    this.done = await this.getTasks('done');
  }

  getTasks(status: string): Promise<Task[]> {
    return this.taskService.getAllTasks(status).then((tasks) => {
      return tasks;
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const movedItem = event.container.data[event.currentIndex];
      const targetList =
        event.container.id === 'cdk-drop-list-0'
          ? 'todo'
          : event.container.id === 'cdk-drop-list-1'
            ? 'inProgress'
            : 'done';
      this.updateTaskStatus(movedItem, targetList);
    }
  }

  async updateTaskStatus(task: Task, newStatus: string) {
    if (!task.id) {
      console.error('Task ID is undefined. Cannot update task.');
      return;
    }
    try {
      const updatedTask = { ...task, status: newStatus };
      await this.taskService.updateTask(task.id, updatedTask);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  }
}
