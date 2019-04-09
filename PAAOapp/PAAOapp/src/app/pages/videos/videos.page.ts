import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoViewerComponent } from '../video-viewer/video-viewer.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  // imagen a mostrar

  slideOpts = {
    centeredSlides: 'true'
  };


  //constructor para el control de modal
    constructor(public modalController: ModalController) {}

    //funcion paraa la imagen en el modal//
      async viewImage(src: string) {
          const modal = await this.modalController.create({
            component: VideoViewerComponent,
         cssClass: 'modal-fullscreen',
         keyboardClose: true,
         showBackdrop: true
       });

       return await modal.present();
     }


   ngOnInit() {}

   closeModal() {
     this.modalController.dismiss();
   }
}
