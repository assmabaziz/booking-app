import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [SidebarComponent, NavbarComponent, DeleteItemComponent, NotFoundComponent],
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
    MatDialogModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    MatIconModule,
    NgxDropzoneModule,
    ImageCropperModule,
    NgOptimizedImage,
    MatDialogModule
  ],
})
export class SharedModule {}
