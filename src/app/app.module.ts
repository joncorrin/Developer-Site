import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MainwallComponent } from './mainwall/mainwall.component';
import { SidewallComponent } from './sidewall/sidewall.component';
import "materialize-css";
import "angular2-materialize";
import {MaterializeModule} from "angular2-materialize";
import { PostFormComponent } from './mainwall/post-form/post-form.component';
import { PostsComponent } from './mainwall/posts/posts.component';
import { CommentFormComponent } from './sidewall/comment-form/comment-form.component';
import { CommentsComponent } from './sidewall/comments/comments.component';
import { PostModalComponent } from './mainwall/post-modal/post-modal.component';
import { PostModalDirective } from './mainwall/post-modal/post-modal.directive';
import {PopoutService} from "./popout.service";
import {CommentsService} from "./sidewall/comments.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    MainwallComponent,
    SidewallComponent,
    PostFormComponent,
    PostsComponent,
    CommentFormComponent,
    CommentsComponent,
    PostModalComponent,
    PostModalDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [PopoutService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private popoutService: PopoutService) {}
}
