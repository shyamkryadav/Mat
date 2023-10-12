import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import   {MatListModule} from '@angular/material/list'
import {MatDialogModule} from '@angular/material/dialog';


const matreial=[
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDialogModule
  
]
@NgModule({
  declarations: [],
  imports: [
      CommonModule,
       matreial
  ],
  exports : [
    matreial,

  ]
})
export class MatModule { }
