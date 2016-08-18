import { Component }     from '@angular/core';
import { DeviceService } from '../../global/services/device.service';

@Component({
  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>Device Info Page</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <h2>Device Info</h2>
    <button full (click)="showUUID()">UUID</button>
    <button full (click)="showModel()">Model</button>
    <button full (click)="showPlatform()">Platform</button>
    <button full (click)="showVersion()">Version</button>
    <button full (click)="showSerial()">Serial</button>
  </ion-content>`,
  providers: [ DeviceService ]
})
export class DevicePage {

  constructor(private device: DeviceService) { }

  showUUID(): void {
    alert(this.device.uuid());
  }

  showModel(): void {
    alert(this.device.model());
  }

  showPlatform(): void {
    alert(this.device.platform());
  }

  showVersion(): void {
    alert(this.device.version());
  }

  showSerial(): void {
    alert(this.device.serial());
  }
}
