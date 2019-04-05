import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {
  @ViewChild('slider') slider: Slides;
 page = "0";

selectedTab(index) {
    this.slider.slideTo(index);
}

async moveButton() {
    let index = await this.slider.getActiveIndex();
    this.page = index.toString();
}

  constructor() { }

  ngOnInit() {
  }

}
