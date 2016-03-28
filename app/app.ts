import {App, Platform} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/initialsetup/login/login';
import {SignupPage} from './pages/initialsetup/signup/signup';
import {LoadingComponent} from './global/components/loading/loading';
import {NetworkComponent} from './global/components/network/network';
import {PushNotificationsService} from './global/services/push_notifications';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';

declare var StatusBar: any;

@App({
  template: `
    <network-connection></network-connection>
    <ion-nav [root]="rootPage"></ion-nav>
    <loading-modal id="loading"></loading-modal>`,
  directives: [LoadingComponent, NetworkComponent],
  providers: [PushNotificationsService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  // rootPage: Type = TabsPage;
  // rootPage: Type = SignupPage;
  rootPage: Type = LoginPage;

  constructor(platform: Platform, pushNotifications: PushNotificationsService) {
    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
      if (typeof StatusBar != 'undefined') {
        StatusBar.styleDefault();
      }

      pushNotifications.init(this.handleNotifications);

    });
  }

  handleNotifications (jsonData) {
    alert('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  }
}
