import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'page-team',
  imports: [NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers = [
    { name: 'John Brown', age: 45, address: 'New York No. 1 Lake Park' },
    { name: 'Jim Green', age: 27, address: 'London No. 1 Lake Park' },
    { name: 'Joe Black', age: 31, address: 'Sidney No. 1 Lake Park' },
  ];
}
