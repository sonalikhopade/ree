import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { portfolio } from './portfolio.mode';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient: HttpClient) { }

  get():Observable<portfolio[]>{
    return this.httpClient.get<portfolio[]>(environment.apiUrl);
  }
}
