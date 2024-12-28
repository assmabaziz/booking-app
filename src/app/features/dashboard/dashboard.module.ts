import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { ChartsComponent } from './components/charts/charts.component';
import { TableSharedComponent } from './components/table-shared/table-shared.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, ChartsComponent,TableSharedComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports:[
    TableSharedComponent
  ]
})
export class DashboardModule {}
