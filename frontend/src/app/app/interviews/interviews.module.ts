import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { InterviewsComponent } from './interviews.component';
import { MatCardModule } from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
  declarations: [InterviewsComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [provideNativeDateAdapter()]
})
export class InterviewsModule { }
