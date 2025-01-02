import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../features/auth/services/auth.service';
import { AddEditAdsComponent } from '../../../features/dashboard/modules/ads/components/add-edit-ads/add-edit-ads.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShredDataService } from '../../services/shred-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uppdate-password',
  templateUrl: './uppdate-password.component.html',
  styleUrl: './uppdate-password.component.scss'
})
export class UppdatePasswordComponent {
  hide:boolean = true;
  hideNewPassword:boolean = true;
  hideConfirmNewPassword:boolean = true;

  readonly dialogRef = inject(MatDialogRef<UppdatePasswordComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  constructor(private _ShredDataService :ShredDataService, private _ToastrService : ToastrService) {}
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null,[ Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
    confirmPassword: new FormControl(null,[ Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
  });
  onNoClick(): void {
    this.dialogRef.close();
  }
  uppdatePassword(data: FormGroup){
this._ShredDataService.changePassword(data.value).subscribe({
  next: (res)=> {
    console.log(res);
    this._ToastrService.error(res.message)
  }, error:(err)=> {
    this._ToastrService.error(err.error.message)
    console.log(err);
  }
})
  }
}
