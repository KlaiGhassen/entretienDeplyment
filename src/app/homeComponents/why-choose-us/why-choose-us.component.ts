import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {
  windowScrolled: any;
  scroledforCalc = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 1000) {
      this.scroledforCalc = true;

    } else {
      this.scroledforCalc = true;
    }
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    responsive:{
      0:{items: 1}, 
      768:{items: 2}, 
      992:{items: 2}, 
      1200:{items: 3}}
  };
}
