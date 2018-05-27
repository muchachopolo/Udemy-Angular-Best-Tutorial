import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FistAssignmentComponent } from './fist-assignment.component';
import { AlertComponent } from './alert/alert.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    FistAssignmentComponent,
    AlertComponent
  ],
  exports: [
    FistAssignmentComponent
  ],
  entryComponents: [ AlertComponent ]
})
export class FistAssignmentModule {
}
