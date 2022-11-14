import { NgModule } from '@angular/core';

import { StudentsRoutingModule } from './students-routing.module';
import { ListEstudentsComponent } from './components/list-estudents/list-estudents.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { MatTablesModule } from '../../shared/mat-tables.module';
import { MatGenericModule } from '../../shared/mat-generic.module';
import { MatFormsModule } from '../../shared/mat-forms.module';
import { FormEstudentComponent } from './components/form-estudent/form-estudent.component';
import { RenderFormService } from './services/render-form.service';
import { RenderFormPipe } from './pipes/render-form.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentFormatService } from './services/student-format.service';

@NgModule({
  declarations: [
    FullNamePipe,
    RenderFormPipe,
    FormEstudentComponent,
    ListEstudentsComponent,
  ],
  imports: [
    MatGenericModule,
    MatFormsModule,
    MatFormFieldModule,
    StudentsRoutingModule,
    MatTablesModule,
  ],
  exports: [
    FormEstudentComponent,
    ListEstudentsComponent
  ],
  providers: [ 
    RenderFormService,
    StudentFormatService,
  ]
})
export class StudentsModule { }
