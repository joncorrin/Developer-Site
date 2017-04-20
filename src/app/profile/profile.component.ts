import {Component, DoCheck, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize'
import {PopoutService} from "../popout.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, DoCheck {
  visible = false;

  constructor(private popoutService: PopoutService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.popoutService.profileVisible) {
      this.visible = true;
      console.log("Profile visible is = " + this.visible);
    } else {
      this.visible = false;
      console.log("Profile visible is = " + this.visible);
    }
  }



}
