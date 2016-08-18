/**
  * @name HomePage
  * @description
  * This class is an example to create new pages following best practices
  */

/**
  * Best Practice:
  * Import must be in alphabetical order
  * Reference: https://angular.io/styleguide#!#application-structure
  */
// ionic and angular imports
import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';

// constants imports

// components imports

// directives imports

// pipes imports

// services imports
import { AlertService } from '../../global/services/alert.service';

/**
  * Best Practice:
  * If the HTML template is small, it can be included in this file using template: `<p>Example</p>`
  */
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers  : [ AlertService ]
})
export class HomePage {
  // constructor params should be in alphabetical order
  constructor(private alert:AlertService) { }


  /**
    * Show an alert
    *
    * @param {string} description  Descriptin wanted in the alert
    */
  showAlert(description) {
    this.alert.basic({ subTitle: description  });
  }
}
