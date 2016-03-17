import {Component} from 'angular2/core';

@Component({
  selector: 'spinner',
  template: `
		<div class="circle inside"></div>
		<div class="circle outside"></div>
	`,
})
export class SpinnerComponent {
  constructor() {}
}
