import { Component, OnInit } from '@angular/core';
import { PopoverLauncherComponent } from '../popover-launcher/popover-launcher.component';
import { PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) {}

  prueba1= '.prueba1';


 //funcion para el popover

 async mostrarPop(){

   const popover = await this.popoverCtrl.create({
     component: PopoverLauncherComponent,
     componentProps:{
       prueba1: 'value'
     }
   });

   await popover.present();
 }

 async mostrarPop1(){

   const popover = await this.popoverCtrl.create({
     component: ImageViewerComponent,
     componentProps:{
       prueba1: false,
       prueba2: true
     }
   });

   await popover.present();
 }
 ngOnInit() {
 }
}
