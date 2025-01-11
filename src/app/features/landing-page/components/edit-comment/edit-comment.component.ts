import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRoomComment } from '../../interfaces/iroom';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrl: './edit-comment.component.scss'
})
export class EditCommentComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IRoomComment
  ) {}
  editCommentForm: FormGroup = new FormGroup({
    comment: new FormControl(''),
  })
  ngOnInit(): void {
    this.editCommentForm.get('comment')?.setValue(this.data.comment);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
