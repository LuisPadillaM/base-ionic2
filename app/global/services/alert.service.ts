import { Injectable }      from '@angular/core';
import { AlertController } from 'ionic-angular';

import { ERROR, DEFAULT_ERROR_DESCRIPTION, OK } from '../../constants/messages.constants';

interface iAlert {
  title?:string;
  subTitle?:string;
  btn?:any;
}

// Don't forget include the Injectable decorator
@Injectable()
export class AlertService {

  constructor(private alertCtrl:AlertController) { }

  basic(config:iAlert = {}) {
    let alert = this.alertCtrl.create({
      title   : config.title || ERROR,
      subTitle: config.subTitle || DEFAULT_ERROR_DESCRIPTION,
      buttons : [ config.btn || OK ]
    });
    alert.present();
  }
}
