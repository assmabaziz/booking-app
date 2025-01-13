import { IRoom } from './../../interfaces/iroom';
import { RoomsService } from './../../services/rooms.service';
import { Component, computed, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ShredDataService } from '../../../../../../shared/services/shred-data.service';
import { IFacility } from '../../../../../landing-page/interfaces/iroom';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrl: './add-edit-room.component.scss',
})
export class AddEditRoomComponent {
  isViewModeValue: boolean = false;
  isEditMode: boolean = false;
  isAddMode: boolean = true;
  roomDatda: any;
  roomDetails: any;
  RoomsId: string = '';
  files: File[] = [];
  imgSrc: any;
  facilities:IFacility[] = [];
  facilityId: any[] | undefined = [];
  params = {
    page: 1,
    size: 5,
  };
  constructor(
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    public _ShredDataService: ShredDataService
  ) {
    if (this._ShredDataService.myData() !== undefined) {
      this.roomDatda = this._ShredDataService.myData();
      this.RoomsId = this.roomDatda._id;
      this.isEditMode = true;
      this.isAddMode = false;
    }
    if (this._ShredDataService.isViewMode()) {
      this.roomDatda = this._ShredDataService.myData();
      this.isAddMode = false;
      this.isEditMode = false;
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
    if(this.RoomsId){
      this.getRoomById(this.RoomsId);
    }
  }
  onSubmit(data: FormGroup) {
    if (this.RoomsId) {
      console.log(data.value);
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
    console.log(roomData);

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
          console.log(roomData);
        },
      });
    } else {
      let roomData = new FormData();
    roomData.append('roomNumber', data.value.roomNumber);
    roomData.append('price', data.value.price);
    roomData.append('capacity', data.value.capacity);
    roomData.append('discount', data.value.discount);
    for (const item of this.imgSrc) {
      roomData.append('imgs', item, item.name);
    }
    for (const facility of data.value.facilities) {
      roomData.append('facilities', facility);
    }
      this._RoomsService.onAddRoom(roomData).subscribe({
        next: (res) => {},
        error: (err) => {
          this._ToastrService.error(err.error.message);
        },
        complete: () => {
          this._Router.navigate(['dashboard/rooms']);
          this._ToastrService.success('Room Added Successfully');
        },
      });
    }
  }
  getRoomById(id: string) {
    this._RoomsService.onGetRoomById(id).subscribe({
      next: (res) => {
        this.roomDetails = res.data.room;
      },
      error: (err) => {
        console.log(err);
      },complete :()=> {
        // console.log(this.roomDetails);

        this.imgSrc = this.roomDetails?.images
        // if (this.roomDetails?.facilities) {

        //   this.roomDetails.facilities.forEach((facility: any) => {
        //     return this.facilities.push(facility);
        //   });
        // };
        this.addRoomForm.patchValue({
          roomNumber: this.roomDetails?.roomNumber,
          price: this.roomDetails?.price,
          capacity: this.roomDetails?.capacity,
          discount: this.roomDetails?.discount,
          facilities: this.roomDetails.facilities.map((x:any) =>x._id)
        });
        console.log(this.roomDetails.facilities);
        console.log(this.addRoomForm.value);
      }
    });
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
      this._ShredDataService.isViewMode.set(false);
    }
  }
}
