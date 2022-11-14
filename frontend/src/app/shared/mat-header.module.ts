import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGenericModule } from './mat-generic.module';
import { CommonModule } from '@angular/common';

const modules = [
  CommonModule,
  MatGenericModule,
  MatToolbarModule,
  MatSidenavModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MatHeaderModule { }
