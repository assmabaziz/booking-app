import { Component, inject, OnInit } from '@angular/core';
import { IProfile } from '../../interfaces/iprofile';
import { AuthService } from '../../../features/auth/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddEditAdsComponent } from '../../../features/dashboard/modules/ads/components/add-edit-ads/add-edit-ads.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  readonly dialogRef = inject(MatDialogRef<AddEditAdsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
  constructor(private _AuthService: AuthService) {}
}
