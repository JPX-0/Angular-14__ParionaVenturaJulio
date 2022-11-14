import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


const modules = [
  CommonModule,
  MatTableModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MatTablesModule { }
