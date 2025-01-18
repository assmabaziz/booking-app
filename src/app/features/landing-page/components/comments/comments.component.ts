import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../../services/rooms-service/rooms.service';
import { MatDialog } from '@angular/material/dialog';
import { NonAuthorizedUserComponent } from '../../modules/home/components/non-authorized-user/non-authorized-user.component';
import { Icomment, IRoomComment } from '../../interfaces/iroom';
import { ToastrService } from 'ngx-toastr';
import { DeleteCommentComponent } from '../delete-comment/delete-comment.component';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';

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
  roomId: string | any = this._ActivatedRoute.snapshot.params['id'];
  userRole: string | null = '';
  roomComments: IRoomComment[] = [];
  addCommentForm = new FormGroup({
    roomId: new FormControl(this.roomId),
    comment: new FormControl(''),
  });
  ngOnInit(): void {
    this.getAllComments();
  }
  getAllComments(): void {
    this._RoomsService.onGetAllRoomComments(this.roomId).subscribe({
      next: (res) => {
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
        next: (res) => {},
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
      this.openDialog();
    }
  }
  removeComment(id: string): void {
    const dialogRef = this.dialog.open(DeleteCommentComponent, {
      width: '300px',
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._RoomsService.onRemoveComment(result).subscribe({
          next: (res) => {},
          error: (err) => {
            console.log(err);
            this._ToastrService.error(err.error.message);
          },
          complete: () => {
            this._ToastrService.success('Comment deleted successfully');
            this.getAllComments();
          },
        });
      }
    });
  }
  uppdateComment(commentDetails: IRoomComment) {
    const dialogRef = this.dialog.open(EditCommentComponent, {
      width: '500px',
      data: commentDetails,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._RoomsService
          .onUppdateComment(result.comment, commentDetails._id)
          .subscribe({
            next: (res) => {},
            error: (err) => {
              console.log(err);
              this._ToastrService.error(err.error.message);
            },
            complete: () => {
              this._ToastrService.success('Comment updated successfully');
              this.getAllComments();
            },
          });
      }
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
