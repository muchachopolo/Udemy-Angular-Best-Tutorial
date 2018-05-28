import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondAssignmentComponent } from './second-assignment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ SecondAssignmentComponent ],
  exports: [ SecondAssignmentComponent ]
})
export class SecondAssignmentModule {
}
