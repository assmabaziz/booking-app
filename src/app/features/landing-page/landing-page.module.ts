import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { SliderComponent } from './components/slider/slider.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { MostPopularAdsComponent } from './components/most-popular-ads/most-popular-ads.component';
import { BeatyBackyardComponent } from './components/beaty-backyard/beaty-backyard.component';
import { LivingRoomComponent } from './components/living-room/living-room.component';
import { ADSComponent } from './components/ads/ads.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavUserComponent,
    NavAuthComponent,
    SliderComponent,
    ExplorerComponent,
    MostPopularAdsComponent,
    BeatyBackyardComponent,
    LivingRoomComponent,
    ADSComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
