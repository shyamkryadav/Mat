import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mat';
  constructor (public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogBoxComponent)
  }
}
