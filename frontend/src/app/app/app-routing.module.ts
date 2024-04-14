import { RouterModule, Routes } from "@angular/router";
import { QuizesComponent } from "./quizes/quizes.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { AuthComponent } from "./auth/auth.component";
import { QuizAttemptComponent } from "./quizes/quiz-attempt/quiz-attempt.component";
import { InterviewsComponent } from "./interviews/interviews.component";
import { InterviewersComponent } from "./interviewers/interviewers.component";

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '', component: NavbarComponent,
         children: [
      { path: 'quizes', component: QuizesComponent },
      { path: 'quiz/:id', component: QuizAttemptComponent },
      { path: 'interviews', component: InterviewsComponent },
      { path: 'interviewers', component: InterviewersComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
