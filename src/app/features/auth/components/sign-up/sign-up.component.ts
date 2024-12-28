import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormControlOptions,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  imgSrc: any;
  files: File[] = [];
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  constructor(private _AuthService: AuthService, private _Router: Router, private _ToastrService: ToastrService) {}
  onSelect(event: any) {
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
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
      role: new FormControl('user'),
    },
    { validators: this.checkConfirmationPassword } as FormControlOptions
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
    // for(const [key,val] of myMap){
    //   myData.append(key, val as Blob)
    //   console.log(key,val);
    //   console.log(key, data.value[key]);
    // }
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('country', data.value.country);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);
    myData.append('role', data.value.role);
    myData.append('profileImage', this.imgSrc, this.imgSrc['name']);
    this._AuthService.onSignUp(myData).subscribe({
      next: (res) => {
        // console.log(res);
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message)
      },
      complete: () => {
        this._ToastrService.success('account created successfully')
        this._Router.navigate(['/auth/signin'])
      },
    });
  }
}
