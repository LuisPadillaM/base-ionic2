import { Component, ElementRef, Renderer } from 'angular2/core';
// Tell typescript to not output errors for global variables.
declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'network-connection',
  styles: [`
    :host {
      position: absolute;
      min-height: 44px;
      top: 0;
      padding: 4px;
      width: 100%;
      overflow: hidden;
      background-color: #AB2323;
      z-index: 1000;
      display: none;
    }

    p {
      color: white;
      text-align: center;
    }

    :host.isActive {
      display: block;
    }
  `],
  template: '<p>No internet connection</p>',
})
export class NetworkComponent {
  public timeout: number = 5000;
  constructor(public el: ElementRef, public renderer: Renderer) {

    setTimeout(() => {
      // iOS Quirks
      // During initial startup,
      // the first offline event (if applicable) takes at least a second to fire.

      if (navigator.connection) {

        document.addEventListener("offline", () => {
          this.show();
        }, false);

        document.addEventListener("online", () => {
          this.hide();
        }, false);
      }
    }, 1500);
  }

  show() {
    this.renderer.setElementClass(this.el.nativeElement, 'isActive', true);
    setTimeout(() => {
      this.hide()
    }, this.timeout);
  }

  hide() {
    this.renderer.setElementClass(this.el.nativeElement, 'isActive', false);
  }
}
