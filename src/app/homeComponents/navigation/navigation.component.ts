import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0, marginTop: -80 }),
        animate(600, style({ opacity: 1, marginTop: 0 })),
      ]),
    ]),
    trigger('SecondFade', [
      transition('void => *', [
        style({ opacity: 0, marginTop: -20 }),
        animate(1200, style({ opacity: 1, marginTop: 0 })),
      ]),
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  windowScrolled: any;
  scroled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 250) {
      this.scroled = true;
    } else {
      this.scroled = false;
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

}
