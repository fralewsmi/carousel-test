import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data = [
    {
      id: 'banner1',
      imgBig: 'https://picsum.photos/1024/200/?random',
      imgSmall: 'https://picsum.photos/424/306/?random'
    },
    {
      id: 'banner2',
      imgBig: 'https://picsum.photos/1024/200/?random',
      imgSmall: 'https://picsum.photos/424/306/?random'
    },
    {
      id: 'banner3',
      imgBig: 'https://picsum.photos/1024/200/?random',
      imgSmall: 'https://picsum.photos/424/306/?random'
    },
    {
      id: 'banner4',
      imgBig: 'https://picsum.photos/1024/200/?random',
      imgSmall: 'https://picsum.photos/424/306/?random'
    },
    {
      id: 'banner5',
      imgBig: 'https://picsum.photos/1024/200/?random',
      imgSmall: 'https://picsum.photos/424/306/?random'
    },
    {
      id: 'banner6',
      imgBig: 'https://picsum.photos/1024/200/?random',
      imgSmall: 'https://picsum.photos/424/306/?random'
    }
  ];

  showIndicator = false;

  constructor() {
  }

  ngOnInit() {
  }

}
