import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './component/auth.component';
import { MatFormsModule } from '../../shared/mat-forms.module';
import { FormGroupDirective } from '@angular/forms';
import { MatGenericModule } from '../../shared/mat-generic.module';

@NgModule({
  exports: [ AuthComponent ],
  imports: [
    MatGenericModule,
    AuthRoutingModule,
    MatFormsModule,
  ],
  declarations: [ AuthComponent ],
  providers: [ FormGroupDirective ]
})
export class AuthModule { }
