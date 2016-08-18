import { Injectable } from '@angular/core';

declare var device: any;

@Injectable()
export class DeviceService {
  uuid(): string {
    return device.uuid;
  }
  model(): string {
    return device.model;
  }
  platform(): string {
    return device.platform;
  }
  version(): string {
    return device.version;
  }
  serial(): string {
    return device.serial;
  }
}
