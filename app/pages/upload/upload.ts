import {Page, Alert, NavController} from 'ionic-angular';

// Tell typescript to not output errors for global variables.
declare var navigator: any;
declare var Camera: any;

@Page({
  templateUrl: 'build/pages/upload/upload.html'
})
export class UploadPage {
  private options;
  private camera;
  constructor(private nav: NavController) {
    // Actual device
    if (navigator.camera) {
      this.camera = navigator.camera;
      this.options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        correctOrientation: true,
        encodingType: Camera.EncodingType.JPEG,
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

    this.camera.getPicture(
      (imagePath) => {
        var image: any = document.getElementById('uploadImage');
        image.src =  imagePath;
      },
      (error) => {

        modal.setMessage('Image error!');

        this.nav.present(modal);
      }, this.options
    );
  }
}
