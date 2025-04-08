import { Component } from '@angular/core';
import { BoardComponent } from "../../ui-components/board/board.component";

@Component({
  selector: 'page-dashboard',
  imports: [BoardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
