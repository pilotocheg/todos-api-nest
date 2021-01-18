import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly START_DATE = new Date();

  getHealthCheck() {
    return {
      alive: true,
      aliveTimeInSec: (Date.now() - this.START_DATE.getTime()) * 1000,
      startDate: this.START_DATE.toISOString(),
    };
  }
}
