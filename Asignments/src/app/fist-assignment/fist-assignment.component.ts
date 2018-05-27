import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { AlertType } from './Models/AlertType';

@Component({
  selector: 'app-fist-assignment',
  templateUrl: './fist-assignment.component.html',
  styleUrls: [ './fist-assignment.component.scss' ]
})
export class FistAssignmentComponent implements OnInit {

  AlertType = AlertType;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openAlert(type: AlertType, message: string) {
    const modalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.type = type;
  }
}
