import { Component } from '@angular/core';

@Component({
  selector: 'page-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
