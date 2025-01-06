import { RoomsService } from './../../services/rooms.service';
import { Component, computed, inject } from '@angular/core';
import { IFacilities, IRoom } from '../../interfaces/iroom';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../../../../../../shared/components/delete-item/delete-item.component';
import { PageEvent } from '@angular/material/paginator';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrl: './add-edit-room.component.scss',
})
export class AddEditRoomComponent {
  isViewModeValue: boolean = false;
  walo: any;
  isEditMode: boolean = false;
  isAddMode: boolean = true;
  roomDatda: any;
  RoomsId: string = '';
  files: File[] = [];
  imgSrc: any;
  facilities: any;
  facilityId: any[] | undefined = [];
  params = {
    page: 1,
    size: 5,
  };
  constructor(
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    public _ShredDataService: ShredDataService
  ) {
    if (this._ShredDataService.myData() !== undefined) {
      this.roomDatda = this._ShredDataService.myData();
      this.RoomsId = this.roomDatda._id;
      this.isEditMode = true;
      this.isAddMode = false;
      this.setDataToUpdate(this.roomDatda);
    }
    if (this._ShredDataService.isViewMode()) {
      this.roomDatda = this._ShredDataService.myData();
        this.isAddMode = false;
        this.isEditMode = false;
      console.log('room redy to view mode');
    }
  }
  addRoomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    facilities: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {
    this.getAllFacilitest();
  }
  onSubmit(data: FormGroup) {
    let roomData = new FormData();
    roomData.append('roomNumber', data.value.roomNumber);
    roomData.append('price', data.value.price);
    roomData.append('capacity', data.value.capacity);
    roomData.append('discount', data.value.discount);
    for (const item of this.imgSrc) {
      roomData.append('imgs', item, item.name);
    }
    for (const facility of data.value.facilities) {
      roomData.append('facilities', facility._id);
    }
    if (this._ShredDataService.myData() !== undefined) {
      console.log('edit room');
      console.log(data.value);
      // console.log(roomData);
      // console.log(this.RoomsId);
      // console.log(this.roomDatda);

      this._RoomsService.onEditRoom(roomData, this.RoomsId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this._ToastrService.error(err.error.message);
        },
        complete: () => {
          this._Router.navigate(['/dashboard/rooms']);
          this._ToastrService.success('Room updated successfully');
        },
      });
    } else {
      console.log('add new room');
      // console.log(data.value);
      console.log(roomData);
      // console.log(this.RoomsId);
      this._RoomsService.onAddRoom(roomData).subscribe({
        next: (res) => {},
        error: (err) => {
          this._ToastrService.error(err.error.message, 'Faild');
        },
        complete: () => {
          this._Router.navigate(['dashboard/rooms']);
          this._ToastrService.success('Room Added Successfully');
        },
      });
    }
  }
  setDataToUpdate(data: any) {
    (this.imgSrc = data?.images),
      this.addRoomForm.patchValue({
        roomNumber: data?.roomNumber,
        price: data?.price,
        capacity: data?.capacity,
        discount: data?.discount,
        facilities: data?.facilities,
      });
    this.facilities = data.facilities;
  }
  getAllFacilitest() {
    this._RoomsService.onGetFacilities().subscribe({
      next: (res) => {
        this.facilities = res.data.facilities;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onSelect(event: any) {
    this.imgSrc = event.addedFiles;
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnDestroy(): void {
    if (this._ShredDataService.isViewMode()) {
      this._ShredDataService.isViewMode.set(false)
    }
  }
}
