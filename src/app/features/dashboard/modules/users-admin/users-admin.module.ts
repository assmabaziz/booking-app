import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';
import { DashboardModule } from '../../dashboard.module';


@NgModule({
  declarations: [
    UsersAdminComponent
  ],
  imports: [
    CommonModule,
    UsersAdminRoutingModule,
    DashboardModule
  ]
})
export class UsersAdminModule { }
