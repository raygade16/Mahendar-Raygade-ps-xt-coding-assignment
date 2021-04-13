import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sanitizeParams } from 'src/app/shared/utils';
import { QUERY_LIMIT } from './../../shared/app.constant';
import { LaunchProgram } from './interface/launch-program-link.interface';
import { QueryParam } from './interface/query-param.interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-launch-program',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.scss'],
})
export class LaunchProgramComponent {
  launches: LaunchProgram[];
  loading: boolean;
  loaderCount = new Array(8);
  // For Filtering Data
  queryParams: QueryParam;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.queryParams.subscribe(params => {
      this.loading = true;
      this.queryParams = { limit: QUERY_LIMIT, ...params };
      this.loadLaunchPrograms(this.queryParams);
    });
  }

  // Get the list of Space X Programs
  loadLaunchPrograms(query: QueryParam): void {
    this.apiService.getLaunchPrograms(sanitizeParams(query)).subscribe(response => {
      this.launches = response;
      this.loading = false;
    });
  }
}
