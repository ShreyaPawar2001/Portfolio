import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';




@NgModule({
  declarations: [
    AboutComponent,
    ProjectComponent,
    ResumeComponent,
    DarkmodeComponent,
   
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
   

  ]
})
export class MenusModule { }
