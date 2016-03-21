import {Platform, Page, Alert, NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';

// Tell typescript to not output errors for global variables.
// declare var navigator: any;

@Page({
  templateUrl: 'build/pages/upload/upload.html'
})
export class UploadPage {
  private options;
  constructor(private platform: Platform, private nav: NavController) {

    // Actual device
    if (navigator.camera) {
      this.options = {
        quality: 100,
        // destinationType: Camera.DestinationType.FILE_URI,
        // sourceType: Camera.PictureSourceType,
        correctOrientation: true,
        // encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: true
      };
    }
  }

  // Device camera
  openCamera() {

    let modal: any = Alert.create({
      title: 'Error!',
      buttons: ['Ok']
    });

    if (!navigator.camera) {

      modal.setMessage('You need an actual device to use the camera');
      this.nav.present(modal);

      return;
    }

    Camera.getPicture(this.options)
      .then(imagePath => {
        var image: any = document.getElementById('uploadImage');
        image.src =  imagePath;
      }, (err) => {
        console.log(err);
        modal.setMessage('Image error!');
        this.nav.present(modal);
      });
  }
}
