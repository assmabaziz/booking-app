import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExplorerComponent } from '../components/explorer/explorer.component';
import { AdsLisComponent } from '../components/ads-lis/ads-lis.component';
import { RatingComponent } from '../components/rating/rating.component';
import { BackyardComponent } from '../components/backyard/backyard.component';
import { PopularAdsComponent } from '../components/popular-ads/popular-ads.component';
import { LargeLivingRoomsComponent } from '../components/large-living-rooms/large-living-rooms.component';
import { SharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent, ExplorerComponent, AdsLisComponent, RatingComponent, BackyardComponent, PopularAdsComponent, LargeLivingRoomsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, SharedModule
  ]
})
export class HomeModule { }
