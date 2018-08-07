import { Component, OnInit } from '@angular/core';

import {LiveFeedService} from 'src/app/service/livefeed.service';

@Component({
  selector: 'app-livefeed',
  templateUrl: './livefeed.component.html',
  styleUrls: ['./livefeed.component.css'],
  providers:[LiveFeedService]
})

export class LivefeedComponent implements OnInit {
  liveFeedList:any;
  cols: any[];

  constructor(private liveFeedService:LiveFeedService) { }

  getLiveFeed(){
    this.liveFeedService.getLiveFeedList({})
    .subscribe((data) => {
      debugger
        this.liveFeedList = data;
      });
  }

  ngOnInit() {
    this.getLiveFeed();

    this.cols = [
          { field: 'broker', header: 'Broker' },
          { field: 'currency', header: 'Currency' },
          { field: 'direction', header: 'Direction' },
          { field: 'instrumentType', header: 'Instrument' },
          { field: 'security', header: 'Security' },
          { field: 'tradeDate', header: 'Date' },
          { field: 'tradeId', header: 'Trade ID' },
          { field: 'tradePrice', header: 'Best Price' },
          { field: 'tradeTime', header: 'Time' }
      ];
  }

}
