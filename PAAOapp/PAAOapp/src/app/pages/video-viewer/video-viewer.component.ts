import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss'],
})
export class VideoViewerComponent implements OnInit {

  @Input() imgSource1 = '';

  slideOpts = {
    centeredSlides: 'true'
  };

  constructor(private modalController: ModalController) {}
  
  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
