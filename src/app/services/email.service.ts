import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  http: any;

  constructor(
    private _emailService: EmailService,private httpClient : HttpClient) {}

    sendEmail(argparam) {
    return this.http.post('httpspakainfo.com/email/', argparam)
    .map(res => res.json())
    .catch(this._errorHandler);
  }
  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }
}
