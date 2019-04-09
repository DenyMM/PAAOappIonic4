import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NotificacionComponent } from '../notificaciones/notificacion/notificacion.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  //constructor para el control de modal
    constructor(public modalController: ModalController) {}

    async mostrarNoti(src: string) {
        const modal = await this.modalController.create({
          component: NotificacionComponent,
          componentProps: {
            imgSource: src,
          },
       cssClass: 'modal-fullscreen',
       keyboardClose: true,
       showBackdrop: true
     });

     return await modal.present();
   }

  ngOnInit() {
  }


}
