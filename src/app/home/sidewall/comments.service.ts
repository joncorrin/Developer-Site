import {Comment} from './comment.model';
import {Subject} from "rxjs";
export class CommentsService {
  commentsChanged = new Subject<Comment[]>();

  comments: Comment[] = [
    new Comment('Jon Corrin', 'Hey, nice profile!', true),
    new Comment('Guy Dude', 'Looks great man!', false),
    new Comment('Jerry Bun', 'Top notch!', false),
    new Comment('Tony Vilone', 'I have a few suggestions', false),
    new Comment('Anonymous', 'Keep it up.', false),
    new Comment('Critical Guy', 'Needs works!', false),
    new Comment('Gamer3345', 'Who are you?', false)
  ];

  getComments() {
    return this.comments.slice();
  }

  getComment(index: number) {
    return this.comments[index];
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
    this.commentsChanged.next(this.comments.slice());
  }

  // updateComment(Index: number, newComment: Comment) {
  //   this.comments[index] = newComment;
  //   this.commentsChanged.next(this.comments.slice());
  // }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
    this.commentsChanged.next(this.comments.slice());
  }

  onCommentAdded() {

  }
}
