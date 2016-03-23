import {Injectable} from 'angular2/core';
import Keys from '../../data/keys';

declare var plugins: any;

@Injectable()
export class PushNotificationsService {

  constructor() {}
  
  init(fn): void {
    
    window.plugins.OneSignal.init(Keys.oneSignal.key,
      { googleProjectNumber: Keys.googleDevelopers.projectNumber },
      fn);

    window.plugins.OneSignal.enableInAppAlertNotification(true);
  }
}
