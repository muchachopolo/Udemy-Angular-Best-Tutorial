import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdAssignmentComponent } from './third-assignment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [ ThirdAssignmentComponent ],
  exports: [ ThirdAssignmentComponent ]
})
export class ThirdAssignmentModule {
}
