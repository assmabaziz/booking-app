import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  hidePassword: boolean = true
  signInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
  })
  constructor(private _AuthService: AuthService,

    private _Router: Router,){
  }

  onSubmit(data: FormGroup) {
    this._AuthService.onSignin(data.value).subscribe({
      next: (res:any) => {
        console.log(res);
        // localStorage.setItem('userToken', res.data.token)
        // localStorage.setItem('role',res.data.user.role)
        // localStorage.setItem('userName',res.data.user.userName)
        // localStorage.setItem('email',res.data.user.email)
        // localStorage.setItem('userId',res.data.user._id)
      }, error: (err) => {
        // this._ToastrService.error(err.error.message, 'Error!')
      }, complete: () => {
        if(localStorage.getItem('role')=='admin'){
          this._Router.navigate(['/dashboard'])
         }
         else{
          this._Router.navigate(['/landingPage/home']);
         }

        // this._ToastrService.success('Logged In', 'Successfully')
      }
    })
  }
}
