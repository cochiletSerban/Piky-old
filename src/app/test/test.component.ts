import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  items: number[] = [];

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  //direction = '';

  constructor() { }

  ngOnInit() {
    for ( let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

  pushItems(item) {
    console.log('called');
    let lent = this.items.length;
    for (let i = lent; i < item + lent ; i++) {
      this.items.push(i);
    }
  }
  onScrollDown() {
    console.log("scroll");
    this.pushItems(10);
    //this.direction = 'down';
  }
}
