import { Component }              from '@angular/core';
import { Events, NavController }  from 'ionic-angular';

import { LoginPage }    from '../initialsetup/login/login';
import { HomePage }     from '../home/home';
import { AboutPage }    from '../about/about';
import { NotificationPage } from '../notification/notification';
import { SettingsPage }     from '../settings/settings';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor(private events:Events, private nav:NavController) {
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = NotificationPage;
    this.tab4Root = SettingsPage;
  }

  ngAfterViewInit() {
    let animation = {
          animate: true,
          direction: 'back'
        };
    this.events.subscribe('event:logout', ()=>{
      this.nav.setRoot(LoginPage, null, animation);
    });
  }

}
