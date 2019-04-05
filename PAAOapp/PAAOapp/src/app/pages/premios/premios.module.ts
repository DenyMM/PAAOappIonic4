import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PremiosPage } from './premios.page';


import { ImageViewerComponent } from '../image-viewer/image-viewer.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PremiosPage
      }
    ])
  ],
  declarations: [PremiosPage]
})
export class PremiosPageModule {}
