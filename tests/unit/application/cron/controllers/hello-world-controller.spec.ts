import {HelloWorldController} from '../../../../../src/application/cron/controllers/hello-world-controller';
import {JobController} from '../../../../../src/application/cron/interfaces/job-controller';

describe('Given controller for hello world', () => {
  let controller: JobController;

  beforeEach(async () => {
    controller = new HelloWorldController();
  });

  describe('Given job controller', () => {
    it('Should get OK!', async () => {
      const response = await controller.executeJob();

      expect(response).toEqual('OK!');
    });
  });
});
