import { NgModule } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { FormEstudentComponent } from './components/form-estudent/form-estudent.component';
import { ListEstudentsComponent } from './components/list-estudents/list-estudents.component';

const routes: Routes = [
  { path: "", component: ListEstudentsComponent },
  { path: ":method", component: FormEstudentComponent, canActivate: [ AdminGuard ] },
  { path: ":method/:id", component: FormEstudentComponent, canActivate: [ AdminGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ FormGroupDirective ]
})
export class StudentsRoutingModule { }
