import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';



const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'project',component:ProjectComponent},
  {path:'resume',component:ResumeComponent},
  {path:'dark',component:DarkmodeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
