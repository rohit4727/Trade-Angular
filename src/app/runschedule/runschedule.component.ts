
import { Component, OnInit } from '@angular/core';

import { JobScheduler } from './job-scheduler';
import { RunscheduleService } from './runschedule.service';

@Component({
  selector: 'app-runschedule',
  templateUrl: './runschedule.component.html',
  providers: [RunscheduleService],
  styleUrls: ['./runschedule.component.css']
})
export class RunscheduleComponent implements OnInit {

  constructor(private runscheduleService: RunscheduleService) { }
  jobSchedulerArr: JobScheduler[];
  cols: any[];
  ngOnInit() {
    this.getAllJobScheduleDetails();
    this.cols = [
      { field: 'id', header: 'Job Id'},
      { field: 'jobName', header: 'Job Name' },
      { field: 'batchFilePath', header: 'File Path' },
      { field: 'scheduleDate', header: 'Schedule Date' },
      { field: 'status', header: 'Status' }
    ];
  }

  getAllJobScheduleDetails(): void {
    this.runscheduleService.getAllJobScheduleDetails()
      .subscribe(jobSchedulerArr => this.jobSchedulerArr = jobSchedulerArr);
  }

}
