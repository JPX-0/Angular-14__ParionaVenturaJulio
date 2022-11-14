import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth.component';

const routes: Routes = [
  { path: "", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatFormFieldModule],
  exports: [RouterModule, MatFormFieldModule]
})
export class AuthRoutingModule { }
