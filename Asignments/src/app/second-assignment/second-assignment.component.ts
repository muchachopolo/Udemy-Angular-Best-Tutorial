import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: [ './second-assignment.component.scss' ]
})
export class SecondAssignmentComponent implements OnInit {

  protected username: string;
  protected state: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  SaveUserName() {
    this.state = true;
    this.username = "";
    this.resetState();
  }

  resetState() {
    setTimeout(() => {
      this.state = false;
    }, 2000);
  }
}
