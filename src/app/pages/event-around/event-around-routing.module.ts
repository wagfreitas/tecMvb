
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventAroundPage } from './event-around.page';

const routes: Routes = [
  {
    path: '',
    component: EventAroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventAroundPageRoutingModule { }
