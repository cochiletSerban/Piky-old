import { Component, OnInit } from '@angular/core';
import { GetBgService } from '../services/get-bg.service';
import { BgArray } from '../objects/BgArray';
declare var $:any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private bg : GetBgService) { }

  ngOnInit() {
    this.bg.getBg().subscribe(
      resp =>{
        $('app-landing-page').css('background-image', 'url(' + resp.url[Math.floor(Math.random()*resp.url.length)] + ')');
      })
  }

}
