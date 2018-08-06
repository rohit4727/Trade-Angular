import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  myInnerHeight= window.innerHeight-80;
  constructor() { }

  ngOnInit() {
  }

}
