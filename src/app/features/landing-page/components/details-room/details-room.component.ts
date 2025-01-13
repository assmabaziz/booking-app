import { FacilitiesComponent } from './../../../dashboard/modules/facilities/facilities.component';
import { DetailsRoomService } from '../../services/room-details-service/details-room.service';
import { Component } from '@angular/core';
import { _ } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IRoom } from '../../interfaces/iroom';
import { BookingService } from '../../modules/home/services/booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrl: './details-room.component.scss',
})
export class DetailsRoomComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
  bookingId: string = '';
  room!: IRoom;
  roomId: string | any = ''
  Facilities: any[] = [];

  constructor(
    private _DetailsRoomService: DetailsRoomService,
    private _BookingService: BookingService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
  ) {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];

    _DetailsRoomService.getDetailsRoom(this.roomId).subscribe({
      next: (res) => {
        console.log(res);
        this.room = res.data.room;
        this.Facilities = res.data.room.facilities;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  bookingForm :FormGroup = new FormGroup({
    startDate: new FormControl('2025-01-20', [Validators.required]),
    endDate: new FormControl('2025-01-22', [Validators.required]),
    room: new FormControl('67822e51c01e1856618e2d2e'),
    totalPrice: new FormControl(2000),
  });
  itsJustAhelperFunction():void {
    this.bookingRoom(this.bookingForm)
  }
  bookingRoom(data: FormGroup) {
    this._BookingService.onCreateBooking(data.value).subscribe({
      next: (res) => {
        console.log(res);
        this.bookingId = res.data.booking._id;
      },
      error: (err) => {
        this._ToastrService.error(err.error.message);
      },
      complete: () => {
        this._ToastrService.success(
          'you have booked a room, you can continue payment '
        );
        this._Router.navigate([`landing-page/payementBooking/`, this.bookingId]);
      },
    });
  }
}
