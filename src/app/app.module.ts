import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MainwallComponent } from './home/mainwall/mainwall.component';
import { SidewallComponent } from './home/sidewall/sidewall.component';
import "materialize-css";
import "angular2-materialize";
import {MaterializeModule} from "angular2-materialize";
import { PostFormComponent } from './home/mainwall/post-form/post-form.component';
import { PostsComponent } from './home/mainwall/posts/posts.component';
import { CommentFormComponent } from './home/sidewall/comment-form/comment-form.component';
import { CommentsComponent } from './home/sidewall/comments/comments.component';
import { PostModalComponent } from './home/mainwall/post-modal/post-modal.component';
import { PostModalDirective } from './home/mainwall/post-modal/post-modal.directive';
import {PopoutService} from "./popout.service";
import {CommentsService} from "./home/sidewall/comments.service";
import {RouterModule, Routes} from "@angular/router";
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent }
]

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
    PostModalDirective,
    ShopComponent,
    ContactComponent,
    HomeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PopoutService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private popoutService: PopoutService) {}
}
