import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/auth/sesion.service';
import { StudentsService } from 'src/app/core/services/db/students.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  hide = true;
  session = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  });

  _dbGetAll?: Subscription;
  _ssGetAuth?: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sessionService: SesionService,
    private dbService: StudentsService,
  ) {}

  ngOnInit(): void {}

  when_error(ref: string, validator: any): boolean {
    return !validator ? this.session.get(ref)?.errors : this.session.get(ref)?.errors?.[validator];
  }

  login(): void {
    this._dbGetAll = this.dbService.getAll().subscribe({
      next: data => {
        const emailFound = data.response.find(student => student?.info.email == this.session.value.email);
        if(this.session.value.email == "admin.test@gmail.com" && this.session.value.password == "admin.test") {
          this.sessionService.confirm("authentication");
          this.sessionService.confirm("admin");
          this.sessionService.signup("admin")
        } else if(emailFound && this.session.value.password == "user.test") {
          this.sessionService.confirm("authentication");
          this.sessionService.reject("admin");
          this.sessionService.signup(emailFound)
        }
        this.session.reset();
      }
    })
    this._ssGetAuth = this.sessionService.get("authentication").subscribe({
      next: auth => auth && this.router.navigate([""])
    });
  }

  ngOnDestroy(): void {
    if(this._dbGetAll) this._dbGetAll.unsubscribe();
    if(this._ssGetAuth) this._ssGetAuth.unsubscribe();
  }

}
