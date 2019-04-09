import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatrocinadorPage } from './patrocinador.page';

const routes: Routes = [
  {
    path: '',
    component: PatrocinadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatrocinadorPage]
})
export class PatrocinadorPageModule {}
