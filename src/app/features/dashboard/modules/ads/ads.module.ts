import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { DashboardModule } from '../../dashboard.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../../shared/shared.module';
import { AddEditAdsComponent } from './components/add-edit-ads/add-edit-ads.component';

@NgModule({
  declarations: [AdsComponent, AddEditAdsComponent],
  imports: [
    CommonModule,
    AdsRoutingModule,
    DashboardModule,
    SharedModule,
    MatPaginatorModule,
  ],
})
export class AdsModule {}
