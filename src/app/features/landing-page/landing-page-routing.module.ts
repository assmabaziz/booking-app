import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [{ path: '', component: LandingPageComponent, children: [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    data: { title: 'Home' },
    loadChildren: () =>
      import('../landing-page/modules/home/home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {path:"explore", component:ExploreComponent}, 
  {path:"favorites", component: FavoritesComponent}
],},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
