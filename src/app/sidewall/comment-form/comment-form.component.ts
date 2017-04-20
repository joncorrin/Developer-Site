import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { Comment } from '../comment.model';
import {CommentsService} from "../comments.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit, OnDestroy {
  comments: Comment[];
  @Output() commentAdded = new EventEmitter<Comment>();
  @ViewChild ('commentContent') commentContentRef: ElementRef;
  subscription: Subscription;

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.subscription = this.commentsService.commentsChanged
      .subscribe(
        (comments: Comment[]) => {
          this.comments = comments;
        }
      );
    this.comments = this.commentsService.getComments();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearForm() {
    this.commentContentRef.nativeElement.value = '';
  }

  log() {
    console.log("Clicked");
  }

  // onAddComment(comments: Comment) {
  //   let commentName = 'Anonymous';
  //   let commentContent = this.commentContentRef.nativeElement.value;
  //   const newComment = new Comment(commentName, commentContent, false);
  //   this.commentsService.comments.push(newComment);
  //   // this.commentAdded.emit(newComment);
  //   this.onSave();
  //   this.clearForm();
  // }
  //
  // onAddComments() {
  //   let commentName = 'Anonymous';
  //   this.commentsService.comments.push(Comment[commentName, this.commentContentRef.nativeElement.value, 'false'])
  // }

  // onSave() {
  //   this.commentsService.addComment(this.comments)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => console.log(error)
  //     );
  // }

}
