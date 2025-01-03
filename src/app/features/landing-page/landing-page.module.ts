import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavAuthComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule, SharedModule
  ]
})
export class LandingPageModule { }
