import {JobController} from '../interfaces/job-controller';

export class HelloWorldController implements JobController {
  public async executeJob(): Promise<string> {
    return 'OK!';
  }

  constructor() {}
}
