import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces';

@Component({
  selector: 'ui-board',
  imports: [CdkDrag, CdkDropList, NgFor],
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
    console.log(this.todo[0].id);
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
    }
  }
}
