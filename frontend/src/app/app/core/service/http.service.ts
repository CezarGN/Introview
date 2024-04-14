import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import { UrlMapping } from '../../urlmapping';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = UrlMapping.BASE_URL;

  constructor() {
  }

  getHttpOptions() {
    const token = localStorage.getItem('access_token'); 
    return token ? {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning' : 'skip-browser-warning',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    } : {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning' : 'skip-browser-warning',
        'Content-Type': 'application/json',
      })
    };
  }
}
