import {Component} from 'angular2/core';
import {SpinnerComponent} from './../spinner/spinner';

// http://www.joshmorony.com/how-to-create-a-custom-loading-component-in-ionic-2
@Component({
  selector: 'loading-modal',
  directives: [SpinnerComponent],
  template: `
    <div class="container" [ngClass]="{'busy': isBusy}">
      <div class="backdrop"></div>
      <spinner class="middle center"></spinner>
    </div>
  `
})
export class LoadingComponent {
 	private isBusy: boolean = false;
  constructor() {}
  show(){
    this.isBusy = true;
  }
  hide(){
    this.isBusy = false;
  }
}
