import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { ViewRoomComponent } from './components/view-room/view-room.component';


@NgModule({
  declarations: [
    RoomsComponent,
    AddEditRoomComponent,
    ViewRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
