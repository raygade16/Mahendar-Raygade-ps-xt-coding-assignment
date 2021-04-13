import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchProgramRoutingModule } from './launch-program-routing.module';
import { LaunchProgramComponent } from './launch-program.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';

@NgModule({
  declarations: [LaunchProgramComponent, FiltersComponent, LaunchCardComponent, CardLoaderComponent, LoadingPlaceholderComponent],
  imports: [CommonModule, LaunchProgramRoutingModule],
})
export class LaunchProgramModule {}
