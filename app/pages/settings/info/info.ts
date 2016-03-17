import {Page, NavController} from 'ionic-angular';
import {BlankPage} from '../../blank/blank';

export class Profile {
  constructor(private nav: NavController) {
    this.nav = nav;
  }

  openPage() {
    this.nav.push(BlankPage);
  }
}
