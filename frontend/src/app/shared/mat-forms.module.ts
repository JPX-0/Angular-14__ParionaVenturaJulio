import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule, 
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MatFormsModule { }
