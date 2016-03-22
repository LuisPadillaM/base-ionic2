import {Component} from 'angular2/core';

@Component({
  selector: 'splash',
  template: `
		<div class="container" [ngClass]="{'busy': isBusy}">
      <div class="outer" [ngClass]="{'rotating': isBusy}">
        <div class="inner"></div>
      </div>
    </div>
	`,
})
export class SplashComponent {
  private isBusy: boolean = true;
  
  constructor() {
    setTimeout(() => { this.hide(); }, 3000);
  }

  hide() {
    this.isBusy = false;
  }
}
