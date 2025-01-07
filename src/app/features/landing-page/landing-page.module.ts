import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { ExploreComponent } from './components/explore/explore.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NonAuthorizedUserComponent } from './modules/home/components/non-authorized-user/non-authorized-user.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavAuthComponent,
    FooterComponent,
    ExploreComponent,
    FavoritesComponent,
    NonAuthorizedUserComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule, SharedModule],
})
export class LandingPageModule {}
