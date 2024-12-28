import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  resMessage = '';
  constructor(private _AuthService: AuthService,
    private _Router: Router,private _ToastrService:ToastrService,private _FormBuilder:FormBuilder){
  }
  forgotPasswordForm =  this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });
  onSubmit() {
    let userEmail = this.forgotPasswordForm.value
    this._AuthService.forgotPassword(userEmail).subscribe({
      next: (res) => {
        this.resMessage = res.message;
      }, error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message, 'Error!')
      }, complete: () => {
        this._ToastrService.success(this.resMessage);
        this._Router.navigate(['/auth/reset-password'])
      }
    })
  }
}
