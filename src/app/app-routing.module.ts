import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth guard/auth.guard';
import { adminGuard } from './core/guards/admin guard/admin.guard';
import { userGuard } from './core/guards/user guard/user.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, adminGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    },
    {
      path: 'landing-page',
      loadChildren: () =>
        import('./features/landing-page/landing-page.module').then(
          (m) => m.LandingPageModule
        ),
      },
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
      {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
