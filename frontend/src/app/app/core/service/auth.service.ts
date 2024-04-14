import {Injectable} from '@angular/core';
import {UserModel} from "../../shared/user.model";
import {catchError} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {HttpService} from "./http.service";
import {ErrorService} from "./error.service";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl;

  constructor(private http: HttpClient, private tokenService: HttpService, private errorService: ErrorService, private router: Router) {
    this.apiUrl = tokenService.url + '/auth'
  }

  register(userModel: UserModel) {
    return this.http.post<UserModel>(this.apiUrl + "/sign-up", userModel, this.tokenService.getHttpOptions())
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  login(user: UserModel) {
    return this.http.post<UserModel>(this.apiUrl + "/sign-in", user, this.tokenService.getHttpOptions())
      .pipe(
        catchError(this.errorService.handleError)
      );
  }

  logout() {
    localStorage.removeItem('access_token')
    this.router.navigate(["/login"]);
  }
}
