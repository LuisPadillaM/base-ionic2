import {IonicApp, Page, NavController} from 'ionic-angular';
import {ProfilePage} from './profile/profile';
import {BlankPage} from '../blank/blank';

@Page({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  private loading: any;
  constructor(private nav: NavController, private app: IonicApp) {
    this.nav = nav;
    this.loading = this.app.getComponent('loading');
  }
  openProfile() {
    this.nav.push(ProfilePage);
  }
  openPage() {
    this.nav.push(BlankPage);
  }
  showLoader() {
    this.loading.show();
    setTimeout(() => {
        this.loading.hide();
    }, 2000);
  }
}
