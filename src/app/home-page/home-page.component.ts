import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BgArray } from '../objects/BgArray';
import { GetBgService } from '../services/get-bg.service';
import '../../../node_modules/masonry-layout/dist/masonry.pkgd.js';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid'; // import necessary datatypes


declare var $: any;
declare var window: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class HomePageComponent implements OnInit {

  _masonry: Masonry;
  masonryItems: any[]; // NgMasonryGrid Grid item list

  images: BgArray = {
    url: ['https://www.ps4wallpapers.com/wp-content/uploads/2018/01/PS4Wallpapers.com_5a5d669a96788_JessicaNigri.jpg']
  };
  constructor(private bg: GetBgService, private render: Renderer2, private ref: ElementRef) { }

  ngOnInit() {
    this.bg.getBg().subscribe(resp => this.masonryItems = resp.url);
  }

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }


  appendItems() {
    if (this._masonry) {
      this._masonry.setAddStatus('append');
      this.masonryItems.push(BgArray);
    }
  }


}
