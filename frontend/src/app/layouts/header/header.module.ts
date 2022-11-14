import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './header.component';
import { MatHeaderModule } from 'src/app/shared/mat-header.module';
import { ShowMenuService } from './services/show-menu.service';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent ,
    HeaderComponent
  ],
  imports: [ 
    // CommonModule,
    HeaderRoutingModule,
    MatHeaderModule
  ],
  exports: [ 
    ToolbarComponent,
    MenuComponent ,
    HeaderComponent
  ],
  providers: [ ShowMenuService ]
})
export class HeaderModule { }
