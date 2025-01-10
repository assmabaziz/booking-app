import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../../services/rooms-service/rooms.service';
import { MatDialog } from '@angular/material/dialog';
import { NonAuthorizedUserComponent } from '../../modules/home/components/non-authorized-user/non-authorized-user.component';
import { IRoomComment } from '../../interfaces/iroom';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _RoomsService: RoomsService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog
  ) {
    this.userRole = localStorage.getItem('userRole');
  }
  roomId: string | any = this._ActivatedRoute.snapshot.params['_id'];
  userRole: string | null = '';
  roomComments: IRoomComment[] = [];
  addCommentForm = new FormGroup({
    roomId: new FormControl(this.roomId),
    comment: new FormControl(null),
  });
  ngOnInit(): void {
    this.getAllComments();
  }
  getAllComments(): void {
    this._RoomsService.onGetAllRoomComments(this.roomId).subscribe({
      next: (res) => {
        console.log(res);
        this.roomComments = res.data.roomComments;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addComment(data: FormGroup): void {
    if (this.userRole) {
      this._RoomsService.onAddComment(data.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
          this._ToastrService.error(err.error.message);
        },
        complete: () => {
          this._ToastrService.success('Comment created successfully');
          this.getAllComments();
          this.clearForm();
        },
      });
    } else {
      console.log('not authorized');
      this.openDialog();
    }
  }
  removeComment(id: string): void {
    this._RoomsService.onRemoveComment(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._ToastrService.success('comment deleted');
        this.getAllComments();
      },
    });
  }
  uppdateComment(comment: string, id: string) {
    this._RoomsService.onUppdateComment(comment, id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._ToastrService.success('comment uppdated ');
      },
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NonAuthorizedUserComponent, {
      width: '60%',
    });
  }
  clearForm(): void {
    this.addCommentForm.controls.comment.setValue(null);
  }
}
