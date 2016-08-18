import { Injectable }      from '@angular/core';
import { ToastController } from 'ionic-angular';

interface iToast {
  message:string;
  duration?:number;
  position?:string;
}

// Don't forget include the Injectable decorator
@Injectable()
export class ToastService {

  constructor(private toastCtrl:ToastController) { }

  show(config:iToast) {
    let alert = this.toastCtrl.create({
      message : config.message,
      duration: config.duration || 3000,
      position: config.position || 'bottom'
    });
    alert.present();
  }
}
