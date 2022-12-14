import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MatGenericModule { }
