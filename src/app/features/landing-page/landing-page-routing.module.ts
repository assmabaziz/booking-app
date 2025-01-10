import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsRoomComponent } from './components/details-room/details-room.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CommentsComponent } from './components/comments/comments.component';

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
      { path: 'Details-Room', component: DetailsRoomComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'review/:_id', component: CommentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
