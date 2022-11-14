import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CommonModule } from '@angular/common';

const modules = [
  // CommonModule,
  HeaderModule,
  FooterModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class LayoutsModule { }
