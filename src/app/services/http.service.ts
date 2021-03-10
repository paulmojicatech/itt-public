import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmailRequest } from '../models/emailReq.interface';

import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  sendEmail(email: IEmailRequest): Observable<boolean> {
    return this._http.post(environment.sendEmailUrl, email).pipe(
      map(() => true),
      catchError(err => throwError(err))
    );
  }
}
