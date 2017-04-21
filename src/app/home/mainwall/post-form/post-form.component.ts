import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../../posts.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() postAdded = new EventEmitter<Post>();
  @ViewChild ('postTitle') postTitleRef: ElementRef;
  @ViewChild ('postContent') postContentRef: ElementRef;
  @ViewChild ('postImagePath') postImagePathRef: ElementRef;
  @ViewChild ('postName') postNameRef: ElementRef;
  @ViewChild ('postEmail') postEmailRef: ElementRef;
  @ViewChild ('postType') postTypeRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  clearForm() {
    this.postTitleRef.nativeElement.value = '';
    this.postContentRef.nativeElement.value = '';
    this.postImagePathRef.nativeElement.value = '';
    this.postNameRef.nativeElement.value = '';
    this.postEmailRef.nativeElement.value = '';
    this.postTypeRef.nativeElement.value = '';
  }

  onAddPost() {
    let postTitle = this.postTitleRef.nativeElement.value;
    let postContent = this.postContentRef.nativeElement.value;
    let postImagePath = this.postImagePathRef.nativeElement.value;
    let postName = this.postNameRef.nativeElement.value;
    let postEmail = this.postEmailRef.nativeElement.value;
    let postType = this.postTypeRef.nativeElement.value;
    const newPost = new Post(postTitle, postContent, postImagePath, postName, postType, postEmail);
    this.postAdded.emit(newPost);
    this.clearForm();
    console.log(newPost);
  }


}
