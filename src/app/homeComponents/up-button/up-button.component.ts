import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-button',
  templateUrl: './up-button.component.html',
  styleUrls: ['./up-button.component.css'],
})
export class UpButtonComponent implements OnInit {
  value: number = 0;

  windowScrolled: any;
  scroled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 250) {
      this.scroled = true;
    } else if(window.pageYOffset < 250){
      this.scroled = false;
    }
    this.value = (window.pageYOffset / 7.602 / 3.1);
  
  }
  toUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit(): void {}
}
