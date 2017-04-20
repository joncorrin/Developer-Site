import {Component, EventEmitter, HostBinding, HostListener, OnInit, Output} from '@angular/core';
import {PopoutService} from "../popout.service";
import {ScrollFade} from '../shared/scroll-fade.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @HostBinding('style.display') isScroll = "box";
  // @HostListener('document:scroll') onScroll() {
  //   this.isScroll = "none";
  // }

  constructor(private popoutService: PopoutService) { }

  ngOnInit() {
  }

  toggleSideWall() {
    this.popoutService.toggleSideWall();
    console.log("navbar button clicked");
  }

  toggleProfile() {
    this.popoutService.toggleProfile();
    console.log("navbar button clicked");
  }



}
