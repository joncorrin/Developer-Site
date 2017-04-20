import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "./posts.model";


@Component({
  selector: 'app-mainwall',
  templateUrl: './mainwall.component.html',
  styleUrls: ['./mainwall.component.css']
})
export class MainwallComponent implements OnInit {


  date = new Date();
  posts: Post[] = [
    new Post('San Diego', 'This post is about how I am moving to San Diego.',
      'https://media-cdn.tripadvisor.com/media/photo-s/0a/8b/5f/41/downtown-san-diego-s.jpg',
      'Jon Corrin', 'jon.corrin@gmail.com'),
    new Post('Atlas Rideshare', 'This post is all about how I am trying to grow a company',
      'http://www.capegazette.com/sites/capegazette/files/2016/10/field/image/web-9.26%2BAtlantis.jpg',
      'Jon Corrin', 'jon.corrin@gmail.com'),
    new Post('Atlas Rideshare', 'This post is all about how I am trying to grow a company',
      'http://www.capegazette.com/sites/capegazette/files/2016/10/field/image/web-9.26%2BAtlantis.jpg',
      'Jon Corrin', 'jon.corrin@gmail.com'), new Post('Atlas Rideshare', 'This post is all about how I am trying to grow a company',
      'http://www.capegazette.com/sites/capegazette/files/2016/10/field/image/web-9.26%2BAtlantis.jpg',
      'Jon Corrin', 'jon.corrin@gmail.com'),
    new Post('Atlas Rideshare', 'This post is all about how I am trying to grow a company',
      'http://www.capegazette.com/sites/capegazette/files/2016/10/field/image/web-9.26%2BAtlantis.jpg',
      'Jon Corrin', 'jon.corrin@gmail.com')
  ];

  onPostAdded(post: Post) {
    this.posts.push(post);
  }

  constructor() { }

  ngOnInit() {
  }



}
