import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.api}/users`)
  }


}
