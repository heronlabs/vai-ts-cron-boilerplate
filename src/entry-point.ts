'use strict';

import 'reflect-metadata';

import {NestFactory} from '@nestjs/core';

import {HelloWorldController} from './application/cron/controllers/hello-world-controller';
import {CronBootstrap} from './application/cron/cron-bootstrap';
import {JobController} from './application/cron/interfaces/job-controller';

const runJob = async (job: JobController) => {
  try {
    const status = await job.executeJob();

    console.log(`[ Final status ] | ${status}`);
  } catch (error: unknown) {
    console.log(`[ Error ] | ${error} on job`);
  }
};

export const handler = async (): Promise<void> => {
  const app = await NestFactory.createApplicationContext(CronBootstrap, {
    logger: false,
  });

  const job: JobController = app.get(HelloWorldController);

  await runJob(job);

  await app.close();
};
