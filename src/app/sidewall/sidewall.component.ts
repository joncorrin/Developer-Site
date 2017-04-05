import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Comment} from './comment.model';

@Component({
  selector: 'app-sidewall',
  templateUrl: './sidewall.component.html',
  styleUrls: ['./sidewall.component.css']
})
export class SidewallComponent implements OnInit {

  date = new Date();
  comments: Comment[] = [
    new Comment('Jon Corrin', 'Hey, nice profile!', true),
    new Comment('Guy Dude', 'Looks great man!', false),
    new Comment('Jerry Bun', 'Top notch!', false),
    new Comment('Tony Vilone', 'I have a few suggestions', false),
    new Comment('Anonymous', 'Keep it up.', false),
    new Comment('Critical Guy', 'Needs works!', false),
    new Comment('Gamer3345', 'Who are you?', false)
  ];

  constructor() { }

  ngOnInit() {
  }

  onCommentAdded(comment: Comment) {
    this.comments.push(comment);
  }

}
