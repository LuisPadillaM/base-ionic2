import {App, Platform} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {LoadingComponent} from './global/components/loading/loading';
import {NetworkComponent} from './global/components/network/network';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';

declare var StatusBar: any;
declare var facebookConnectPlugin: any;
declare var TwitterConnect: any;

@App({
  template: `
    <network-connection></network-connection>
    <ion-nav [root]="rootPage"></ion-nav>
    <loading-modal id="loading"></loading-modal>`,
  directives: [LoadingComponent, NetworkComponent],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: Type = TabsPage;

  constructor(platform: Platform) {
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

      if (typeof facebookConnectPlugin != 'undefined') {
        facebookConnectPlugin.login(['email', 'public_profile'],
          function (response) {
            alert('Successful login!');
            console.log(response);
          },
          function loginError(error) {
            alert('Error logging in');
            console.error(error)
          }
        )
      }
      // if (typeof TwitterConnect != 'undefined') {
      //   TwitterConnect.login(
      //     function(result) {
      //       alert('Successful login!');
      //       console.log(result);
      //     }, function(error) {
      //       alert('Error logging in');
      //       console.log(error);
      //     }
      //   );
      // }
    });
  }
}
