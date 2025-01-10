import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { DashboardModule } from '../../dashboard.module';
import { SharedModule } from '../../../../shared/shared.module';
import { AddFacilitiesComponent } from './components/add-facilities/add-facilities.component';


@NgModule({
  declarations: [
    FacilitiesComponent,
    AddFacilitiesComponent,
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    DashboardModule,
    SharedModule
  ]
})
export class FacilitiesModule { }
