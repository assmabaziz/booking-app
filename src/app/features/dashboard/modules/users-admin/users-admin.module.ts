import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';
<<<<<<< HEAD

=======
import { DashboardModule } from '../../dashboard.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
>>>>>>> 8cf980f ([feat] users(admin) Module: create table desgin and api integration and pagenator and other edits)

@NgModule({
  declarations: [UsersAdminComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    UsersAdminRoutingModule
  ]
=======
    UsersAdminRoutingModule,
    DashboardModule,
    SharedModule,
    MatPaginatorModule,
  ],
>>>>>>> 8cf980f ([feat] users(admin) Module: create table desgin and api integration and pagenator and other edits)
})
export class UsersAdminModule {}
