import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';
import { StudentsService } from './core/services/db/students.service';
import { SesionService } from './core/services/auth/sesion.service';
import { StudentsModule } from './features/students/students.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutsModule,
    CoreModule,
    StudentsModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [ StudentsService, SesionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
