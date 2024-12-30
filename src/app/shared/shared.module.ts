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
@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DeleteItemComponent,
    NotFoundComponent,
    SeperatorPipe,
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
    MatMenuModule,SeperatorPipe,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class SharedModule {}
