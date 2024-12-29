import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';
import { DashboardModule } from '../../dashboard.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UsersAdminComponent],
  imports: [
    CommonModule,
    UsersAdminRoutingModule,
    DashboardModule,
    SharedModule,
    MatPaginatorModule,
  ],
})
export class UsersAdminModule {}
