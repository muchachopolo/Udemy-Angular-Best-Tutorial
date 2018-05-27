import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertType } from '../Models/AlertType';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.scss' ]
})

export class AlertComponent implements OnInit {
  @Input() message: string;
  @Input() type: AlertType;
  AlertType = AlertType;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }
}
