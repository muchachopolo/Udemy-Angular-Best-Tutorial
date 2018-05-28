import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: [ './third-assignment.component.scss' ]
})
export class ThirdAssignmentComponent implements OnInit {
  public isCollapsed: boolean = true;
  protected list: Array<Date> = [];

  constructor() {
  }

  ngOnInit() {
  }

  showDetails() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.list.push(new Date());
    }
  }
  graterOrEqualThan5 = ThirdAssignmentComponent.graterOrEqualThan5;
  static graterOrEqualThan5(index) {
    if (index >= 4) {
      return 'list-group-item-info';
    }
    return '';
  }

  removeItem(item, index) {
    this.list.splice(index, 1);
  }
}
