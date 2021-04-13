export interface LaunchProgramRocket {
  fairings: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: {
    cores: {
      block: number;
      core_serial: string;
      flight: number;
      gridfins: boolean;
      land_success: boolean;
      landing_intent: boolean;
      landing_type: string;
      landing_vehicle: string;
      legs: boolean;
      reused: boolean;
    }[];
  };
}
