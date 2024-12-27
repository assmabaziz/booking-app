import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path:'signin', component:SignInComponent, title:'Login'},
  {path:'signup', component:SignUpComponent, title:'Register'},
  {path:'forgot-password', component:ForgotPasswordComponent, title:'Forgot password'},
  {path:'reset-password', component:ResetPasswordComponent, title:'Reset password'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
