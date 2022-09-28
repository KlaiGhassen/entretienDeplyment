import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-vedio-player',
  templateUrl: './vedio-player.component.html',
  styleUrls: ['./vedio-player.component.css']
})
export class VedioPlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VedioPlayerComponent>) {}

  ngOnInit(): void {
  }

}
