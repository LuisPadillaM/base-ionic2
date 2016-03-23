import {Page, NavController} from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {TabsPage} from '../../tabs/tabs';

@Page({
  templateUrl: 'build/pages/initialsetup/login/login.html'
})
export class LoginPage {
  constructor(private nav: NavController) {

  }

  gotoSignupPage() {
    this.nav.push(SignupPage);
  }

  gotoHomePage() {
    // What tabpage to show
    // 0 = home, 1 = upload, 2 = notification, 3 = settings
    TabsPage.tabIndex = 2;

    this.nav.push(TabsPage);
  }

}
