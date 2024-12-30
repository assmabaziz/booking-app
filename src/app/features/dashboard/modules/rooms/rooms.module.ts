import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { ViewRoomComponent } from './components/view-room/view-room.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardModule } from "../../dashboard.module";
import { EditRoomComponent } from './components/edit-room/edit-room.component';


@NgModule({
  declarations: [
    RoomsComponent,
    AddEditRoomComponent,
    ViewRoomComponent,
    EditRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule, SharedModule, MatPaginatorModule,
    DashboardModule
]
})
export class RoomsModule { }
