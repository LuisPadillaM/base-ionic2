import {Page} from 'ionic-angular';
import {DeviceService} from '../../global/services/device';

@Page({
  // when the component template is short use inline html
  template:`
  <ion-navbar *navbar>
    <ion-title>Device Info Page</ion-title>
  </ion-navbar>

  <ion-content padding>
    <h2>Device Info</h2>
    <button full (click)="showUUID()">UUID</button>
    <button full (click)="showModel()">Model</button>
    <button full (click)="showPlatform()">Platform</button>
    <button full (click)="showVersion()">Version</button>
  </ion-content>`,
  providers: [DeviceService]
})
export class DevicePage {
  constructor(private device: DeviceService) {

  }
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
}