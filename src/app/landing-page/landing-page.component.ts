import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  imagePathTop = '../../assets/ocean.jpg';
  imagePathMiddle = '../../assets/sky.jpg';
  imagePathBottom = '../../assets/wall.jpg';


  constructor() { }

  ngOnInit() {
  }

}
