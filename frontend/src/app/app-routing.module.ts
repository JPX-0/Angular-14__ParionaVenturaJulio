import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { 
    path: "students", 
    loadChildren: () => import("./features/students/students-routing.module").then(e => e.StudentsRoutingModule),
    canActivate: [AuthGuard]
  },
  { path: "login", loadChildren: () => import("./features/auth/auth-routing.module").then(e => e.AuthRoutingModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
