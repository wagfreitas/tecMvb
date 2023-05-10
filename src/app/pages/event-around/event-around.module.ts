
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventAroundPageRoutingModule } from './event-around-routing.module';

import { EventAroundPage } from './event-around.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventAroundPageRoutingModule
  ],
  declarations: [EventAroundPage]
})
export class EventAroundPageModule { }
