import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
=======
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatPaginatorModule } from '@angular/material/paginator';
>>>>>>> 8cf980f ([feat] users(admin) Module: create table desgin and api integration and pagenator and other edits)

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
<<<<<<< HEAD
  ],
  exports: [SidebarComponent, NavbarComponent, MatIconModule],
=======
    NgxDropzoneModule,
    ImageCropperModule,
    NgOptimizedImage,
    MatPaginatorModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    MatIconModule,
    NgxDropzoneModule,
    ImageCropperModule,
    NgOptimizedImage,
  ],
>>>>>>> 8cf980f ([feat] users(admin) Module: create table desgin and api integration and pagenator and other edits)
})
export class SharedModule {}
