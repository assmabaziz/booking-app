import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsRoomComponent } from './components/details-room/details-room.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NonAuthorizedUserComponent } from './modules/home/components/non-authorized-user/non-authorized-user.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavAuthComponent,
    FooterComponent,
    ExploreComponent,
    DetailsRoomComponent,
    FavoritesComponent,
    NonAuthorizedUserComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule,ReactiveFormsModule, SharedModule],
})
export class LandingPageModule {}
