import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchProgramComponent } from './launch-program.component';

const routes: Routes = [{ path: '', component: LaunchProgramComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchProgramRoutingModule { }
