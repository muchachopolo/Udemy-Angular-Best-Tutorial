import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FistAssignmentModule } from './fist-assignment/fist-assignment.module';
import { SecondAssignmentModule } from './second-assignment/second-assignment.module';
import { ThirdAssignmentModule } from './third-assignment/third-assignment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FistAssignmentModule,
    SecondAssignmentModule,
    ThirdAssignmentModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
