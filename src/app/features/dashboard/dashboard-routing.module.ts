import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,children:[
    {path:'',redirectTo: 'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'users-admin',loadChildren: () => import('./modules/users-admin/users-admin.module').then(m => m.UsersAdminModule) },
    { path: 'rooms', loadChildren: () => import('./modules/rooms/rooms.module').then(m => m.RoomsModule) }
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
