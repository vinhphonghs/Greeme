import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/modules/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
