import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {}

  LoginUser(body:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post('http://127.0.0.1:5000/api/user/login', body, httpOptions);
    // return this.api.post('mysql+pymysql://root:@localhost/tt_officiel', body, httpOptions)
  }

}
