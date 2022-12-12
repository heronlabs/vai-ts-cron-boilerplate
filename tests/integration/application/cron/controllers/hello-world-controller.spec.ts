import {Test} from '@nestjs/testing';

import {HelloWorldController} from '../../../../../src/application/cron/controllers/hello-world-controller';
import {cronModule} from '../../../../../src/application/cron/cron-bootstrap';
import {JobController} from '../../../../../src/application/cron/interfaces/job-controller';

describe('Given controller for hello world', () => {
  let controller: JobController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(cronModule).compile();
    controller = moduleRef.get(HelloWorldController);
  });

  describe('Given job controller', () => {
    it('Should get OK!', async () => {
      const response = await controller.executeJob();

      expect(response).toEqual('OK!');
    });
  });
});
