import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TableSharedComponent } from './components/table-shared/table-shared.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, TableSharedComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  exports:[
    TableSharedComponent
  ]
})
export class DashboardModule {}
