import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BgArray } from '../objects/BgArray';
import { GetBgService } from '../services/get-bg.service';
import '../../../node_modules/masonry-layout/dist/masonry.pkgd.js';

declare var $: any;
declare var window: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('grid') grid;
  cacat = 'container cacat';
  images: BgArray = {
    url: ['https://www.ps4wallpapers.com/wp-content/uploads/2018/01/PS4Wallpapers.com_5a5d669a96788_JessicaNigri.jpg']
  };
  constructor(private bg: GetBgService, private render: Renderer2, private ref: ElementRef) { }

  ngOnInit() {
    this.bg.getBg().subscribe(resp => this.images = resp);
  }
  reflow() {
    window.dispatchEvent(new Event('resize'));
  }
}
