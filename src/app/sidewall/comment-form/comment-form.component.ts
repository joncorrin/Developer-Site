import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Comment } from '../comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentAdded = new EventEmitter<Comment>();
  @ViewChild ('commentContent') commentContentRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  clearForm() {
    this.commentContentRef.nativeElement.value = '';
  }

  onAddComment(comment: Comment) {
    let commentName = 'Anonymous';
    let commentContent = this.commentContentRef.nativeElement.value;
    const newComment = new Comment(commentName, commentContent, false);
    this.commentAdded.emit(newComment);
    this.clearForm();
  }

}
