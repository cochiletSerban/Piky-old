import { Component, OnInit, Renderer2, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logged = false;
  @ViewChild('eye') eye;
  searchForm: FormGroup;
  @Output() searchEvent: EventEmitter<String> = new EventEmitter();
  constructor(private render: Renderer2, private ref: ElementRef, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.searchForm = new FormGroup ({
      'search' : new FormControl(null, Validators.required)
    });

    this.render.setStyle(this.eye.nativeElement, 'animation', 'flash 5s infinite');
    this.logged = this.auth.isLogedIn();
  }

  search() {
    console.log(this.searchForm.value.search);
    this.searchEvent.emit(this.searchForm.value.search);
  }

  takeMeHome() {
    this.router.navigate(['/']);
  }

  login() {
    this.router.navigate(['/auth']);
  }
}
