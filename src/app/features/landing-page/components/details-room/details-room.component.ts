import { FacilitiesComponent } from './../../../dashboard/modules/facilities/facilities.component';
import { DetailsRoomService } from './../../services/details-room.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _ } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IRoom } from '../../interfaces/iroom';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Irating } from '../../interfaces/irating';
import { NgxStarsComponent } from 'ngx-stars';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrl: './details-room.component.scss',
})
export class DetailsRoomComponent implements OnInit {
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

  room!: IRoom;
  reviewDetails: Irating[] = [];
  Facilities: any[] = [];
  idRoom: string = '';
  reviewForm = this._FormBuilder.group({
    review: ['', [Validators.required]],
  });

  ratingDisplay: number = 0;

  constructor(
    private _FormBuilder: FormBuilder,
    private _DetailsRoomService: DetailsRoomService,
    private route: ActivatedRoute,
    private _ToastrService: ToastrService
  ) {
    route.params.subscribe((params) => {
      this.idRoom = params['id'];
      console.log(this.idRoom);
    });
  }

  ngOnInit(): void {
    this._DetailsRoomService.getDetailsRoom(this.idRoom).subscribe({
      next: (res) => {
        console.log(res);
        this.room = res.data.room;
        this.Facilities = res.data.room.facilities;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.getReviews();
  }

  getReviews() {
    this._DetailsRoomService.getReview(this.idRoom).subscribe({
      next: (res) => {
        console.log(res);
        this.reviewDetails = res.data.roomReviews;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onRatingSet(rating: number): void {
    this.ratingDisplay = rating;
  }

  // when you want to update the stars in code

  sendReview() {
    console.log(this.reviewForm.value);

    this._DetailsRoomService
      .createReview({
        rating: this.ratingDisplay,
        roomId: this.idRoom,
        ...this.reviewForm.value,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          this._ToastrService.success(res.message);
          this.getReviews();
        },
        error: (err) => {
          console.log(err);
          this._ToastrService.error(err.error.message);
        },
      });
  }

  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  //   {
  //     "startDate": "2025-01-20",
  //     "endDate": "2025-01-30",
  //     "room": "65a1b57341ab48a30d06375f",
  //     "totalPrice": 2000
  // }

  BookingDateRoom() {
    this._DetailsRoomService
      .onBookingRoomWithDate({
        ...this.range.value,
        room: this.idRoom,
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
