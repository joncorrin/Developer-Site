import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../posts.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() post: Post;

  date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
