import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
