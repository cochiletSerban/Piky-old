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
  bgs : BgArray = {url:[]};
  spinOnHover : boolean = false;
  constructor(private bg : GetBgService) { }

  ngOnInit() {
    this.bg.getBg().subscribe(resp => this.bgs = resp);
    $('.pushpin').pushpin();
  }

  onHo(hovering:boolean){
    if (hovering)
      $('i').css('animation','fadein 1s infinite');
    else
      $('i').css('animation','none');
  }
}
