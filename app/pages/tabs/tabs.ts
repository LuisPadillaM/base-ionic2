import {Page} from 'ionic-angular';
import {HomePage} from '../home/home';
import {NotificationPage} from '../notification/notification';
import {UploadPage} from '../upload/upload';
import {SettingsPage} from '../settings/settings';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabHomeRoot: any = HomePage;
  tabNotificationRoot: any = NotificationPage;
  tabUploadRoot: any = UploadPage;
  tabSettingsRoot: any = SettingsPage;

  static tabIndex: number = 0;
  selectedIndex: number = 0;

  constructor() {
  	this.selectedIndex = TabsPage.tabIndex;
  }
}
