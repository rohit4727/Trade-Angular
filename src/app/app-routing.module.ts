import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunscheduleComponent } from './runschedule/runschedule.component';
import { LivefeedComponent } from './livefeed/livefeed.component';

const routes: Routes = [
  { path: '', redirectTo: '/runschedule', pathMatch: 'full' },
  { path: 'runschedule', component: RunscheduleComponent },
  { path: 'livefeed', component: LivefeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
