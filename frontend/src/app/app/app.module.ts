import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from './auth/auth.module';
import { QuizesModule } from './quizes/quizes.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { InterviewsModule } from './interviews/interviews.module';
import { InterviewersModule } from './interviewers/interviewers.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuizesModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbar,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
    InterviewsModule,
    InterviewersModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
