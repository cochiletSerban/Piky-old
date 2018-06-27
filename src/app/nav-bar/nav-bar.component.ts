import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logged:boolean = false;
  @ViewChild('eye') eye;
  constructor(private render: Renderer2, private ref: ElementRef) { }

  ngOnInit() {
    this.render.setStyle(this.eye.nativeElement, 'animation', 'flash 5s infinite');
  }

}
