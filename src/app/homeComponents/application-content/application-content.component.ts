import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { AnimationEvent } from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VedioPlayerComponent } from '../vedio-player/vedio-player.component';

@Component({
  selector: 'app-application-content',
  templateUrl: './application-content.component.html',
  styleUrls: ['./application-content.component.css'],
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
export class ApplicationContentComponent implements OnInit {
  isDivIn = false;

  animationDone(event: AnimationEvent) {
    this.isDivIn = true; //or false, depends on your specific logic
  }

  slidesStore = [
    {
      id: '1',
      src: './assets/img/photos/about21.jpg',
      title: 'title1',
      type: 'img',
    },
    {
      id: '1',
      src: './assets/img/photos/about22.jpg',
      title: 'title1',
      type: 'video',
    },
    {
      id: '1',
      src: './assets/img/photos/about23.jpg',
      title: 'title1',
      type: 'img',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: [
      "<i><img style='style='width=20px; height:30px;' src='./assets/img/left-arrow.png'></i>",
      "<i><img style='style='width=20px; height:30px;' src='./assets/img/right-arrow.png'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: true,
  };
  activeSlides: any;

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openVedioPlayer() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '0',
      left: '0'
  };

    this.dialog.open(VedioPlayerComponent, dialogConfig);
  }
}
