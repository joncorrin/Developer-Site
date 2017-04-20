import {Component, EventEmitter, HostBinding, HostListener, OnInit, Output} from '@angular/core';
import {PopoutService} from "../popout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


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
