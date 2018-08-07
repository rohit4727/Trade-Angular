import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {LiveFeedInterface} from 'src/app/interface/live-feed-interface';


@Injectable({
  providedIn: 'root'
})

export class LiveFeedService {
  url = 'http://127.0.0.1:8081/Trade/';
  constructor(private http:HttpClient) {
  }


  getLiveFeedList(obj){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get(this.url+'all', {headers:headers});
  }
}
