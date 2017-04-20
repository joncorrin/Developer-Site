import {Component, DoCheck, OnInit} from '@angular/core';
import {Comment} from './comment.model';
import {PopoutService} from "../popout.service";
import {CommentsService} from "./comments.service";

@Component({
  selector: 'app-sidewall',
  templateUrl: './sidewall.component.html',
  styleUrls: ['./sidewall.component.css'],
  providers: [CommentsService]
})
export class SidewallComponent implements OnInit, DoCheck {
  visible = false;

  date = new Date();

  constructor(private popoutService: PopoutService, private commentsService: CommentsService) { }
  comments: Comment[];


  ngOnInit() {
  }

  ngDoCheck() {
    if (this.popoutService.sideWallVisible) {
      this.visible = true;
      console.log("sidewall visible is = " + this.visible);
    } else {
      this.visible = false;
      console.log("sidewall visible is = " + this.visible);
    }
  }



  onCommentAdded() {
    console.log("Comment added");
    // this.comments.push(this.commentsService.getComments());
  }


}
