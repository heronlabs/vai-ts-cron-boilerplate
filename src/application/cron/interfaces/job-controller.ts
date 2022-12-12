export interface JobController {
  executeJob(): Promise<string>;
}
