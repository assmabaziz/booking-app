import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { ExploreComponent } from './components/explore/explore.component';
import { DetailsRoomComponent } from './components/details-room/details-room.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NonAuthorizedUserComponent } from './modules/home/components/non-authorized-user/non-authorized-user.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { PaymentBookingComponent } from './modules/home/components/payment-booking/payment-booking.component';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeElementsDirective,StripePaymentElementComponent } from 'ngx-stripe';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  declarations: [
    LandingPageComponent,
    NavAuthComponent,
    FooterComponent,
    ExploreComponent,
    DetailsRoomComponent,
    FavoritesComponent,
    NonAuthorizedUserComponent,
    CommentsComponent,
    DeleteCommentComponent,
    EditCommentComponent,
    PaymentBookingComponent,
    PaymentBookingComponent
  ],
  imports: [CommonModule, LandingPageRoutingModule,ReactiveFormsModule, SharedModule,NgxStarsModule, StripePaymentElementComponent, NgxStripeModule.forRoot(
    'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
  )
],
})
export class LandingPageModule {}
/*


StripePaymentElementComponent, NgxStripeModule.forRoot(
    'pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'
  ),





 */