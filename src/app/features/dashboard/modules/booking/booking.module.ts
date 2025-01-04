import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardModule } from '../../dashboard.module';


@NgModule({
  declarations: [
    BookingComponent,
    ViewBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    DashboardModule
  ]
})
export class BookingModule { }
