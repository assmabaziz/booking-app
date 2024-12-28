import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  signUpForm = new FormGroup(
    {
      userName: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{3,10}'),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
      country: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
        ),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
        ),
      ]),
    },
    { validators: this.checkConfirmationPassword  } as FormControlOptions
  );
  checkConfirmationPassword(group: AbstractControl) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    if (confirmPassword?.value === '') {
      confirmPassword?.setErrors({ required: true });
    } else if (confirmPassword?.value !== password?.value) {
      confirmPassword?.setErrors({ mismatch: true });
    }
  }
  onSubmit(data: FormGroup) {
    let myData = new FormData();
    let myMap = new Map(Object.entries(data.value));
    for (const [key, val] of myMap) {
      myData.append(key, data.value[key]);
    }
    console.log(myData);

    // this._AuthService.onSignUp(myData).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {},
    // });
  }
}
