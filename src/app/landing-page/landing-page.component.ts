import { Component, OnInit, Renderer2, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { GetBgService } from '../services/get-bg.service';
import { BgArray } from '../objects/BgArray';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { MyJqService } from '../services/my-jq.service';


declare var $:any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChildren('fa1 ,fa2,fa3') fa;

  bgs : BgArray = {url:[]};
  spinOnHover : boolean = false;
  constructor(private bg : GetBgService, private render: Renderer2,
     private el:ElementRef ) { }



  ngOnInit() {
    this.bg.getBg().subscribe(resp => this.bgs = resp);
  }

  onHo(hovering:boolean){
    console.log(this.fa);
    if (hovering)
      $('i').css('animation','spin 1s infinite');
     //console.log(this.fa);
    //this.render.setStyle(this.el.nativeElement.querySelector('i'),'animation','fadein 1s infinite');
    // this.render.setStyle(this.fa._results[2].nativeElement,'animation','fadein 1s infinite');
    else
      $('i').css('animation','none');
    // this.render.setStyle(this.el.nativeElement.querySelector('i'),'animation','none');
  }
}
