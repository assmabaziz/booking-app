import { IReset } from './../../interfaces/ireset';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  hidePassword: boolean = true;
  hideRePassword: boolean = true;

  constructor(
    private _FormBuilder: FormBuilder,
    private _Router: Router,
    private _ToastrService: ToastrService,
    private _AuthService: AuthService
  ) {}

  resetForm = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    seed: ['', [Validators.required]],
  });

  sendData() {
    console.log(this.resetForm.value);
    this._AuthService.onResetPassword(this.resetForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, ' successfully');
        setTimeout(() => {
          this._Router.navigate(['/auth']);
        }, 1000);
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message);
      },
    });
  }
}
