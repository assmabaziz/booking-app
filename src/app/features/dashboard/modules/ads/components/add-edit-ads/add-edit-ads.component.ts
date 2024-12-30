import { Component, inject, model } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-ads',
  templateUrl: './add-edit-ads.component.html',
  styleUrl: './add-edit-ads.component.scss',
})
export class AddEditAdsComponent {
  readonly dialogRef = inject(MatDialogRef<AddEditAdsComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
