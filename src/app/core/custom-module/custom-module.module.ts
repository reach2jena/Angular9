import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatCardModule
} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {
 MatDialogModule
} from '@angular/material/dialog';
import {
 MatInputModule
 } from '@angular/material/input';
 import {
 MatTableModule,

 } from '@angular/material/table';
 import {
  MatMenuModule
 } from '@angular/material/menu';

 import {  MatIconModule
} from '@angular/material/icon';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 
 import {  MatToolbarModule
 } from '@angular/material/toolbar';
 import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDividerModule,
  MatSidenavModule,
  MatGridListModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,  
   MatProgressSpinnerModule,
   MatSidenavModule,
   MatDividerModule,
   MatGridListModule
   ],
})
export class CustomMaterialModule { }