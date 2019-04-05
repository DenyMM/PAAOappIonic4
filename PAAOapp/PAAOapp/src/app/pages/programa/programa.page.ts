import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage {

    // Place the code below into your own component or use the full template


    mainSelected: string = 'music';
    subSelected: string = 'pop';

    selectMain(page) {
        this.mainSelected = page;
        this.subSelected = this.subCategories[page][0].id;
    }

    selectSub(cat, cont) {
        this.subSelected = cat;
        cont.instance.navigate(cat, true);
    }

    mainSettings: any = {
        theme: 'ios'
    };

    categorySettings: any = {
        theme: 'ios'
    };

    @ViewChild('musicCategories')
    musicCat;
    @ViewChild('bookCategories')
    booksCat;
    @ViewChild('movieCategories')
    mooviesCat;


    contentSettings: any = {
        theme: 'ios', 
        layout: 1,
        paging: true,
        threshold: 15,
        cssClass: 'md-page',
        onAnimationStart: (event, inst) => {
            const subSelected = this.subCategories[this.mainSelected][-(event.destinationX / inst.contWidth)].id;
            if (subSelected != this.subSelected) {
                this[this.mainSelected + 'Cat'].instance.navigate(subSelected);
                this.subSelected = subSelected;
            }
        }
    };

    listviewSettings = {
        theme: 'ios', 
        swipe: false,
        striped: true,
        onItemTap: function () {},
        enhance: true
    };

    mainCategories = [
        { id: 1, icon: 'music', page: 'music', name: 'Music' },
        { id: 2, icon: 'book', page: 'books', name: 'Books' },
        { id: 3, icon: 'film', page: 'moovies', name: 'Moovies' }
    ];

    subCategories = {
        music: [
            { id: 'pop', name: 'Pop' },
            { id: 'rock', name: 'Rock' },
            { id: 'jazz', name: 'Jazz' },
            { id: 'piano', name: 'Piano' },
            { id: 'electric', name: 'Electric' }
        ],
        books: [
            { id: 'fantasyb', name: 'Fantasy' },
            { id: 'education', name: 'Education' },
            { id: 'history', name: 'History' },
            { id: 'scifyb', name: 'Sci-Fi' },
            { id: 'romanceb', name: 'Romance' }
        ],
        moovies: [
            { id: 'fantasym', name: 'Fantasy' },
            { id: 'horror', name: 'Horror' },
            { id: 'animation', name: 'Animation' },
            { id: 'scifym', name: 'Sci-Fi' },
            { id: 'romancem', name: 'Romance' }
        ]
    };

    data = {
        books: {
            fantasyb: [
                { id: 1, img: 'https://img.mobiscroll.com/demos/paging/The_Lord_Of_The_Rings_1x.png', title: 'The Lord Of The Rings', author: 'J.R.R. Tolkien' },
                // Showing partial data. Download full source.
            ],
            education: [
                { id: 14, img: 'https://img.mobiscroll.com/demos/paging/Do_Androids_Dream_Of_Electric_Sheep_1x.png', title: 'Do Androids Dream Of Electric Sheep?', author: 'Philip K. Dick' },
            ],
            history: [
                { id: 27, img: 'https://img.mobiscroll.com/demos/paging/Humans_of_New_York_Stories_1x.png', title: 'Humans of New York: Stories', author: 'by Brandon Stanton' },
            ],
            scifyb: [
                { id: 39, img: 'https://img.mobiscroll.com/demos/paging/The_Mote_In_God\'s_Eye_1x.png', title: 'The Mote In God\'s Eye', author: 'Larry NivenJerry Pournelle' },
            ],
            romanceb: [
                { id: 50, img: 'https://img.mobiscroll.com/demos/paging/Bad_Boy\'s_Baby_1x.png', title: 'Bad Boy\'s Baby', author: 'by Sosie Frost' },
            ]
        },
        music: {
            pop: [
                { id: 1, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele' },
            ],
            rock: [
                { id: 20, img: 'https://img.mobiscroll.com/demos/paging/Elle_King_1x.png', title: 'Ex\'s & Oh\'s', artist: 'Elle King' },
            ],
            jazz: [
                { id: 35, img: 'https://img.mobiscroll.com/demos/paging/Jeff_Lorber_1x.png', title: 'Get Up', artist: 'Jeff Lorber Fusion' },
            ],
            piano: [
                { id: 50, img: 'https://img.mobiscroll.com/demos/paging/Rachmaninoff_1x.png', title: 'Etudes Tableaux', artist: 'Rachmaninoff' },
            ],
            electric: [
                { id: 60, img: 'https://img.mobiscroll.com/demos/paging/Major-Lazer_1x.png', title: 'Lean On', artist: 'Major Lazer & DJ Snake Featuring M0' },
            ]
        },
        moovies: {
            fantasym: [
                { id: 1, img: 'https://img.mobiscroll.com/demos/paging/The_Seven_Samurai_1x.png', title: 'The Seven Samurai', producer: 'by Akira Kurosawa' },
            ],
            horror: [
                { id: 14, img: 'https://img.mobiscroll.com/demos/paging/Psycho_1x.png', title: 'Psycho', producer: 'by Alfred Hitchcock' },
            ],
            animation: [
                { id: 25, img: 'https://img.mobiscroll.com/demos/paging/Chaar_Sahibzaade_1x.png', title: 'Chaar Sahibzaade', producer: 'by Harry Baweja' },
            ],
            scifym: [
                { id: 38, img: 'https://img.mobiscroll.com/demos/paging/Inception_1x.png', title: 'Inception', producer: 'by Christopher Nolan' },
            ],
            romancem: [
                { id: 51, img: 'https://img.mobiscroll.com/demos/paging/The_Princess_Bride_1x.png', title: 'The Princess Bride', producer: 'by Rob Reiner' },
            ]
        }
    };

}
