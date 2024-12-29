import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { ViewRoomComponent } from './components/view-room/view-room.component';

const routes: Routes = [{ path: '', component: RoomsComponent},
  {path:'add-room', component:AddEditRoomComponent},
  {path:'edit-room/:id', component:AddEditRoomComponent},
  {path:'view-room/:id', component:ViewRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
