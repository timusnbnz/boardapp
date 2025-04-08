import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ui-board',
  imports: [CdkDrag, CdkDropList, NgFor],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  todo = ['Social Media', 'Review survey results', 'research video marketing'];
  inProgress = ['Blog post live', 'E-Mail campaign'];
  done = ['Morning emails', 'Blog post'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log('Updated TODO list:', this.todo);
    console.log('Updated IN PROGRESS list:', this.inProgress);
    console.log('Updated DONE list:', this.done);
  }
}
