import {Page} from 'ionic-angular';

@Page({
  // when the component template is short use inline html
  template:`
  <ion-navbar *navbar>
    <ion-title>Blank Page</ion-title>
    <ion-buttons end>
      <button (click)="alert('alert')">
        save
      </button>
    </ion-buttons>
  </ion-navbar>

  <ion-content padding>
    <h2>Welcome to blank page!</h2>
    <p>
      This starter project comes with simple tabs-based layout for apps
      that are going to primarily use a Tabbed UI.
    </p>
    <p>
      Take a look at the <code>www/app/</code> directory to add or change tabs,
      update any existing page or create new pages.
    </p>
  </ion-content>`
})
export class BlankPage {}