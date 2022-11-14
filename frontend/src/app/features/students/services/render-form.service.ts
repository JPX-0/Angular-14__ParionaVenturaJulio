import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RenderFormService {

  id?: string | undefined;

  typeForm$!: Observable<"post" | "put">;
  typeForm!: "post" | "put";

  constructor() {
    this.typeForm$ = new Observable<"post" | "put">(suscribe => suscribe.next(this.typeForm));
  }

  saveIDToEdit(id: string | undefined): void {
    this.id = id
  }
  getIDToEdit(): string | undefined {
    return this.id;
  }

  saveTypeForm(render: "post" | "put"): void {
    this.typeForm$.subscribe({
      next: () => this.typeForm = render
    }).unsubscribe();
  }
  getTypeForm(): Observable<"post" | "put"> {
    return of(this.typeForm);
  }

}
