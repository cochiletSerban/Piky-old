import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logged:boolean = false;
  @ViewChild('eye') eye;
  constructor(private render: Renderer2, private ref: ElementRef,private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.render.setStyle(this.eye.nativeElement, 'animation', 'flash 5s infinite');
    this.logged = this.auth.isLogedIn();
  }

  takeMeHome() {
    
    this.router.navigate(['/']);

  }

  login() {
    this.router.navigate(['/auth']);
  }
}
