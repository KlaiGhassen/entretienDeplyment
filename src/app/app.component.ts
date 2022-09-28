import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { AnimationEvent } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}
