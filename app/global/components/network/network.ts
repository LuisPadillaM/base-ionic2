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
  template: `
    <p>No internet connection </p>
  `,
})
export class NetworkComponent {
  constructor(public el: ElementRef, public renderer: Renderer) {

    if (navigator.connection) {

      document.addEventListener("offline", () => {
        renderer.setElementClass(el.nativeElement, 'isActive', true);
      }, false);

      document.addEventListener("online", () => {
        renderer.setElementClass(el.nativeElement, 'isActive', false);
      }, false);

    }
  }
  /*
  checkConnection() {

    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return states[networkState];
  }
  */
}
