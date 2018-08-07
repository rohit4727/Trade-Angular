import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { JobScheduler } from './job-scheduler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RunscheduleService {
  scheduleApiUrl = 'http://localhost:8083/jobScheduler/getAllJobScheduleDetails';  // URL to web api

  constructor(private http: HttpClient) { }

  getAllJobScheduleDetails(): Observable<JobScheduler[]> {
    return this.http.get<JobScheduler[]>(this.scheduleApiUrl);
  }
}
