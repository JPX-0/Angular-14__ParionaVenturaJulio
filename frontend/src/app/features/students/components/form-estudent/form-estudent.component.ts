import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RenderFormService } from '../../services/render-form.service';
import { Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/auth/sesion.service';
import { StudentsService } from 'src/app/core/services/db/students.service';
import { StudentFormatService } from '../../services/student-format.service';

@Component({
  selector: 'app-form-estudent',
  templateUrl: './form-estudent.component.html',
  styleUrls: ['./form-estudent.component.css'],
})
export class FormEstudentComponent implements OnInit, OnDestroy {

  dataStudents = this.formBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    age: ["", [Validators.required, Validators.min(18)]],
    email: ["", [Validators.required, Validators.email]],
    image: ["", []],
    commission: ["", [Validators.required]],
    status: ["", [Validators.required]],
    courses: new FormArray([new FormControl()])
  });

  method!: "create" | "edit";
  id?: string;
  errorApi?: any;

  _ssAcount?: Subscription;
  _rsForm?: Subscription;
  _getForId?: Subscription;
  _post?: Subscription;
  _put?: Subscription;
  _route?: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dtoService: StudentFormatService,
    private dbService: StudentsService,
    private activateRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._route = this.activateRoute.params.subscribe(({ method, id }: Params) => {
      this.method = method;
      this.id = id;
    })
    if(this.method == "edit" && this.id) this._getForId = this.dbService.getDataById(this.id).subscribe({
      next: ({ response: res }) => {
        if(res && typeof res == "object") this.dataStudents.setValue(this.dtoService.renderInput(res))
      },
      error: ({ error }) => console.error("form-estudent.component - getDataById - 71: ", error)
    });
    else if(this.method == "create" && this.id) this.router.navigate(["students/create"]);
    else if(this.method == "create") return;
    else this.router.navigate(["students"]);
  }

  submitForm(): void {
    if(this.method == "edit") {
      const editedStudent = this.dtoService.update(this.dataStudents.value);
      this._put = this.dbService.put(this.id!, editedStudent).subscribe({
        next: () => {
          this.dataStudents.reset();
          this.router.navigate(["students"]);
        },
        error: err => console.error("form-estudent.component - put - 71: ", err.error)
      })
    } else if(this.method == "create") {
      const newStudent = this.dtoService.create(this.dataStudents.value);
      this._post = this.dbService.post(newStudent).subscribe({
        next: () => {
          this.dataStudents.reset();
          this.router.navigate(["students"]);
        },
        error: ({ error }) => console.error("form-estudent.component - post - 80: ", error)
      })
    }
  }

  // Funciones para manejar los cursos
  get this_courses(): FormArray {
    return this.dataStudents.get("courses") as FormArray;
  }
  addCourse(): void {
    this.this_courses.push(new FormControl());
  }
  removeCourse(): void {
    this.this_courses.removeAt([this.this_courses].length);
  }

  // Funciones para manejar los errores en las entradas
  when_error(ref: string, validator: any): boolean {
    return !validator ? this.dataStudents.get(ref)?.errors : this.dataStudents.get(ref)?.errors?.[validator];
  }
  when_touched(ref: string): boolean {
    return this.dataStudents.get(ref)?.touched!;
  }

  ngOnDestroy(): void {
    if(this._post) this._post.unsubscribe();
    if(this._put) this._put.unsubscribe();
    if(this._route) this._route.unsubscribe();
    if(this._getForId) this._getForId.unsubscribe();
  }

}
