import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';
import { DashboardModule } from '../../dashboard.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [UsersAdminComponent, ViewUserComponent],
  imports: [
    CommonModule,
    UsersAdminRoutingModule,
    DashboardModule,
    SharedModule,
    MatPaginatorModule,
  ],
})
export class UsersAdminModule {}
