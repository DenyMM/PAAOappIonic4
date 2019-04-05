import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
})
export class PlanosPage implements OnInit {

  // imagen a mostrar
  imgSource = '../assets/images/comercial.jpg';

   slideOpts = {
     centeredSlides: 'true'
   };

   //constructor para el control de modal
     constructor(public modalController: ModalController) {}

   //funcion paraa la imagen en el modal//
     async viewImage(src: string) {
         const modal = await this.modalController.create({
           component: ImageViewerComponent,
           componentProps: {
             imgSource: src,
           },
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
