import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ComponentsModule } from './components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesService } from './app.test.service';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './components/sidenav/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    ComponentsModule,
    FontAwesomeModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    SidenavService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
