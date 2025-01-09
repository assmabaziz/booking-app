import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-non-authorized-user',
  templateUrl: './non-authorized-user.component.html',
  styleUrl: './non-authorized-user.component.scss'
})
export class NonAuthorizedUserComponent {
  constructor(public dialogRef: MatDialogRef<NonAuthorizedUserComponent>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
