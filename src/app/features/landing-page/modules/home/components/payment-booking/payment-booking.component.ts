import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { IBooking } from '../../interfaces/ibooking';
import {
  injectStripe,
  StripeCardComponent,
  StripeFactoryService,
} from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-booking',
  templateUrl: './payment-booking.component.html',
  styleUrl: './payment-booking.component.scss',
})
export class PaymentBookingComponent {
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  stripe = injectStripe(
    'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
  );
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',

      },
    },
  };
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookingService: BookingService,
    private _StripeFactoryService: StripeFactoryService, private _ToastrService :ToastrService) {
    this.bookingId = this._ActivatedRoute.snapshot.params['id'];
  }
  bookingDetails: any// any must be replaced by :IBooking ={} as IBooking
  bookingId: string = '';
  token: string = '';
  stepOneDone: boolean = false;
  stepTwoDone: boolean = false
  ngOnInit(): void {
    this.getBookingDetails()

  }
  getBookingDetails(): void {
    this._BookingService.onGetBookingDetails(this.bookingId).subscribe({
      next: (res) => {
        this.bookingDetails = res.data.booking;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createToken() {
    const name = ('assma');
    this.stripe
      .createToken(this.cardElement.element, { name })
      .subscribe((result) => {
        console.log(result);

        if (result.token) {
          this.token=result.token.id
          this.stepOneDone = true

        } else if (result.error) {
          console.log(result.error);
          // this._ToastrService.error(result.error)
        }
      });
  }
  paySubmit(token: string) {
    this._BookingService.onPayBooking(this.bookingId, token).subscribe({
      next: (res) => {
        console.log(res);
        if(res.data.success){
          this.stepTwoDone = true
        }
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.error.message)
      },
    });
  }
}
