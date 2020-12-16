import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    CommentsComponent,
  ]
})
export class ComponentsModule { }
