import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renderForm'
})
export class RenderFormPipe implements PipeTransform {

  transform(page: "create" | "edit"): string {
    return page == "create" ? "Registrar" : page == "edit" ? "Editar" : "...";
  }

}
