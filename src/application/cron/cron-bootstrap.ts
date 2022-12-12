import {Module, ModuleMetadata} from '@nestjs/common';

import {CoreBootstrap} from '../../core/core-bootstrap';
import {HelloWorldController} from './controllers/hello-world-controller';

export const cronModule: ModuleMetadata = {
  imports: [CoreBootstrap],
  providers: [HelloWorldController],
  exports: [HelloWorldController],
};

@Module(cronModule)
export class CronBootstrap {}
