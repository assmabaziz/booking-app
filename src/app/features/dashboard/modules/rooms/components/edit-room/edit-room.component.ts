import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.scss',
})
export class EditRoomComponent {
  imgSrc: any = '';
  files: File[] = [];
  facilities: any = ''
  constructor(
    private dialogRef: MatDialogRef<EditRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
  editRoomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    facilities: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {
    this.imgSrc = this.data.images;
    this.editRoomForm.patchValue({
      roomNumber: this.data?.roomNumber,
      price: this.data?.price,
      capacity: this.data?.capacity,
      discount: this.data?.discount,
      facilities: this.data?.facilities,
    });
this.facilities = this.data.facilities
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
