import { Component }     from '@angular/core';

import { NavController, Events } from 'ionic-angular';
import { DevicePage }            from '../device/device';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {

  private loading: any;

  constructor(private events:Events, private nav: NavController) {
    this.nav = nav;
  }

  openDevicePage() {
    this.nav.push(DevicePage);
  }

  showUserId(ids) {
    alert(ids.userId);
  }

  logout() {
    this.events.publish('event:logout');
  }
}
