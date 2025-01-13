import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeperatorPipe } from './pipes/seperator.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoDataComponent } from './components/no-data/no-data.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UppdatePasswordComponent } from './components/uppdate-password/uppdate-password.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DeleteItemComponent,
    NotFoundComponent,
    SeperatorPipe,
    NoDataComponent,
    ProfileComponent,
    UppdatePasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    NgxDropzoneModule,
    ImageCropperModule,
    NgOptimizedImage,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    TranslateModule,
    MatPaginatorModule,NzButtonModule, MatStepperModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    MatIconModule,
    NgxDropzoneModule,
    ImageCropperModule,
    NgOptimizedImage,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    SeperatorPipe,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    NoDataComponent,
    MatSelectModule,
    ProfileComponent,
    CarouselModule,
    TranslateModule,
    MatPaginatorModule,MatStepperModule
  ],
})
export class SharedModule {}
