import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { LaunchProgram } from '../interface/launch-program-link.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Get the launch programs list from end point
   * {limit}
   */
  getLaunchPrograms(params: {}): Observable<LaunchProgram[]> {
    return this.http.get<LaunchProgram[]>(`${environment.apiEndPoint}/launches?${params}`).pipe(
      map((response: LaunchProgram[]) => {
        // we modify the response to add the landing success response
        response.map(launchProgram => (launchProgram.land_success = this.addLandingState(launchProgram)));
        return response;
      }),
    );
  }

  /**
   * Add land_success on first iterate of list
   * {LaunchProgram} launchProgram
   */
  addLandingState(launchProgram: LaunchProgram): boolean {
    return launchProgram.rocket.first_stage.cores.every(rocketCore => rocketCore.land_success);
  }
}
