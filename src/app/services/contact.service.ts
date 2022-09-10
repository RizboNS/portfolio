import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _url =
    'https://us-central1-email-api-portfolio.cloudfunctions.net/app/send-email';
  constructor(private http: HttpClient) {}

  sendMsg(msg: {}) {
    return this.http.post<{}>(this._url, msg);
  }
}
