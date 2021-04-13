import { LaunchProgramRocket } from './launch-program-rocket.interface';
import { LaunchProgramLink } from './launch-program.interface';

export interface LaunchProgram {
  mission_name: string;
  mission_id: string[];
  flight_number: number;
  links: LaunchProgramLink;
  launch_year: string;
  launch_success: boolean;
  land_success: boolean;
  rocket: LaunchProgramRocket;
}
