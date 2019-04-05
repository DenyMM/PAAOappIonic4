import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 @ViewChild('slideWithNav') slideWithNav: Slides;
 @ViewChild('slideWithNav2') slideWithNav2: Slides;
 @ViewChild('slideWithNav3') slideWithNav3: Slides;

 sliderOne: any;
 sliderTwo: any;
 sliderThree: any;

   //Sliders
slideOptsOne = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay:false
};
slideOptsTwo = {
  initialSlide: 1,
  slidesPerView: 2,
  loop: true,
  centeredSlides: true
};
slideOptsThree = {
  initialSlide: 0,
  slidesPerView: 3
};

constructor(
) {
  //imagenes
  this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: '../../assets/banners/1.jpg'
        },
        {
          id: 2,
          image: '../../assets/banners/2.jpg'
        }
        /*{
          id: 3,
          image: '../../assets/banners/.jpg'
        }*/
      ]
    };
  }

  //Mover al siguiente slide
slideNext(object, slideView) {
  slideView.slideNext(500).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });
}

//Mover al slide anterior
slidePrev(object, slideView) {
  slideView.slidePrev(500).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });;
}

//Metodo que se llama cuando el slide cambia por la navegacion
SlideDidChange(object, slideView) {
  this.checkIfNavDisabled(object, slideView);
}

//Llama metodos para revisar si el slide esta primero o despues de abilitar o desabilitar la navegacion
checkIfNavDisabled(object, slideView) {
  this.checkisBeginning(object, slideView);
  this.checkisEnd(object, slideView);
}

checkisBeginning(object, slideView) {
  slideView.isBeginning().then((istrue) => {
    object.isBeginningSlide = istrue;
  });
}
checkisEnd(object, slideView) {
  slideView.isEnd().then((istrue) => {
    object.isEndSlide = istrue;
  });
}

}
