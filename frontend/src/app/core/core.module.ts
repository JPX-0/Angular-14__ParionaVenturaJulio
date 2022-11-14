import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionService } from './services/auth/sesion.service';
import { StudentsService } from './services/db/students.service';
import { CoursesService } from './services/db/courses.service';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResolveUserPipe } from './pipes/resolve-user.pipe';

const components = [
  HomeComponent,
  NotFoundComponent,
  ResolveUserPipe
]

@NgModule({
  declarations: components,
  imports: [ CommonModule ],
  exports: components,
  providers: [
    // SesionService,
    // CoursesService,
    // StudentsService
  ],
})
export class CoreModule { }
