import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { RunscheduleComponent } from './runschedule/runschedule.component';
import { LivefeedComponent } from './livefeed/livefeed.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RunscheduleComponent,
    LivefeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,ButtonModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
