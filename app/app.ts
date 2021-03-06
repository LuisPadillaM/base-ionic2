import { Component }                from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar }                from 'ionic-native';

import { LoginPage }                from './pages/initialsetup/login/login';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class IonicBase {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(IonicBase);
