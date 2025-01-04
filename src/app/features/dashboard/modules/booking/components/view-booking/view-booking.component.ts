import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.scss'
})
export class ViewBookingComponent {
constructor(
    public dialogRef: MatDialogRef<ViewBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
