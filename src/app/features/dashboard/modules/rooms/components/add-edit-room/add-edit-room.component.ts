import { RoomsService } from './../../services/rooms.service';
import { Component, inject } from '@angular/core';
import { IFacilities, IRoom } from '../../interfaces/iroom';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../../../../../../shared/components/delete-item/delete-item.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrl: './add-edit-room.component.scss',
})
export class AddEditRoomComponent {
  isViewMode: boolean = true;
  isEditMode: boolean = true;
  isAddMode: boolean = true;
  roomDatda: any;
  RoomsId: string = '';
  files: File[] = [];
  imgSrc: any;
  facilities: IFacilities[] | any = [];
  facilityId: any[] | undefined = [];
  params = {
    page: 1,
    size: 5,
  };
  constructor(
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.RoomsId = _ActivatedRoute.snapshot.params['id'];
    if (this.RoomsId) {
      this.isEditMode = true;
      this.getRoomById(this.RoomsId);
      _ActivatedRoute.url.subscribe((url) => {
        this.isViewMode = url.some((segment) => segment.path === 'view-room');
        this.disableFormControls();
      });
      this._ActivatedRoute.url.subscribe((url) => {
        this.isEditMode = url.some((segment) => segment.path === 'edit-room');
        this.enableFormControls();
      });
    } else {
      this.isAddMode = true;
      this.isEditMode = false;
      this.isViewMode = false;
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
    let myData = new FormData();
    myData.append('roomNumber', data.value.roomNumber);
    myData.append('price', data.value.price);
    myData.append('capacity', data.value.capacity);
    myData.append('discount', data.value.discount);
    // myData.append('facilities', data.value.facilities)
  //  myData.append('imgs', this.imgSrc, this.imgSrc['name'])
  for (const facility of data.value.facilities) {
    myData.append('facilities', facility._id);
  }
    if (this.RoomsId) {
      this._RoomsService.onEditRoom(myData, this.RoomsId).subscribe({
        next: (res) => {},
        error: (err) => {
          this._ToastrService.error(err.error.message, 'failed');
        },
        complete: () => {
          this._Router.navigate(['/dashboard/rooms']);
          this._ToastrService.success('Rooms Updated Successfully');
        },
      });
    } else {
      console.log(data.value);
      console.log(myData);
      this._RoomsService.onAddRoom(myData).subscribe({
        next: (res) => {console.log(res);
        },
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
  getAllFacilitest() {
    this._RoomsService.onGetFacilities().subscribe({
      next: (res) => {
        this.facilities = res.data.facilities;
        console.log(this.facilities);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getRoomById(id: string) {
    this._RoomsService.onGetRoomById(id).subscribe({
      next: (res) => {
        // this.roomDatda = res.data.room;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  disableFormControls() {
    if (this.isViewMode) {
      this.addRoomForm.disable();
    }
  }
  enableFormControls() {
    if (this.isEditMode) {
      this.addRoomForm.enable();
    }
  }
  onSelect(event: any) {
    this.imgSrc = event.addedFiles;
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
