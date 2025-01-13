import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsRoomComponent } from './components/details-room/details-room.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PaymentBookingComponent } from './modules/home/components/payment-booking/payment-booking.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        data: { title: 'Home' },
        loadChildren: () =>
          import('../landing-page/modules/home/home/home.module').then(
            (mod) => mod.HomeModule
          ),
      },
      { path: 'explore', component: ExploreComponent },
      { path: 'Details-Room/:id', component: DetailsRoomComponent },
      { path: 'favorites', component: FavoritesComponent },
      {path:'payementBooking/:id', component: PaymentBookingComponent}
      // { path: 'review/:_id', component: CommentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
