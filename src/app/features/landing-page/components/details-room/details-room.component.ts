import { FacilitiesComponent } from './../../../dashboard/modules/facilities/facilities.component';
import { DetailsRoomService } from '../../services/room-details-service/details-room.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { _ } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IRoom } from '../../interfaces/iroom';
import { BookingService } from '../../modules/home/services/booking.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgxStarsComponent } from 'ngx-stars';
import { IRating } from '../../interfaces/irating';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrl: './details-room.component.scss',
  providers: [DatePipe],
})
export class DetailsRoomComponent implements OnInit{
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
  roomId: string | any = '';
  Facilities: any[] = [];
  priceRoom: number = 0;
  totalPrice: number = 0;
  discount: number = 0;
  firstDay: Date = new Date();
  lastDay: Date = new Date();
  dateRange: Date[] = [];
  reviewDetails:IRating[]=[];
  raitingRoom: number = 0
  constructor(
    private _DetailsRoomService: DetailsRoomService,
    private _BookingService: BookingService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _DatePipe: DatePipe,
    private _FormBuilder: FormBuilder,
  ) {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];
  }

  bookingForm: FormGroup = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    room: new FormControl(''),
    totalPrice: new FormControl(''),
  });
  reviewForm = this._FormBuilder.group({
    review: ['', [Validators.required]],
  });
  ngOnInit(): void {
    this._DetailsRoomService.getDetailsRoom(this.roomId).subscribe({
      next: (res) => {
        this.room = res.data.room;
        this.Facilities = res.data.room.facilities;
        this.priceRoom = this.room.price;
        this.discount = this.room.discount;
        // console.log(this.room);
      },
      error: (err) => {
        // console.log(err);
      }
    });
    this.getReviews();
  }
  bookingRoom(data: FormGroup) {
    console.log(this._DatePipe.transform(data.value.startDate, 'yyyy-MM-dd'));
    console.log(this._DatePipe.transform(data.value.endDate, 'yyyy-MM-dd'));


    console.log(this.bookingForm.value);
    this._BookingService.onCreateBooking(this.bookingForm.value).subscribe({
      next: (res) => {
        // console.log(res);
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
        // console.log(this.bookingId);

      },
    });
  }
  calculateDateRange() {
    const currentDate = new Date(this.firstDay);
    while (currentDate <= this.lastDay) {
      this.dateRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

this.totalPrice= this.priceRoom * this.dateRange.length
this.bookingForm.patchValue({
  startDate: this._DatePipe.transform(this.bookingForm.value.startDate, 'yyyy-MM-dd'),
  endDate: this._DatePipe.transform(this.bookingForm.value.startDate, 'yyyy-MM-dd'),
  room: this.roomId,
  totalPrice: this.totalPrice,
});
console.log(this.bookingForm.value);

  }
  getReviews() {
    this._DetailsRoomService.getReview(this.roomId).subscribe({
      next: (res) => {
        // console.log(res);
        this.reviewDetails = res.data.roomReviews;
      },
      error: (err) => {
        // console.log(err);
      },
    });
  }
  onRatingSet(rating: number): void {
    this.raitingRoom = rating;
  }
  sendReview() {
    // console.log(this.reviewForm.value);

    this._DetailsRoomService
      .createReview({
        rating: this.raitingRoom,
        roomId: this.roomId,
        ...this.reviewForm.value,
      })
      .subscribe({
        next: (res) => {
          // console.log(res);
          this._ToastrService.success(res.message);
          this.getReviews();
        },
        error: (err) => {
          // console.log(err);
          this._ToastrService.error(err.error.message);
        },
      });
  }


  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });
  BookingDateRoom() {
    this._DetailsRoomService
      .onBookingRoomWithDate({
        ...this.range.value,
        room: this.roomId,
        totalPrice: this.room.price,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          this._ToastrService.success(res.message);
        },
        error: (err) => {
          console.log(err);
          this._ToastrService.error(err.error.message);
        },
      });
  }
}
