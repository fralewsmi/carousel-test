import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides_lg = [
    {image: 'https://picsum.photos/1024/200/?random'}
  ];

  slides_sm = [
    {image: 'https://picsum.photos/424/306/?random'}
  ];
  showIndicator = false;

  constructor() { }

  ngOnInit() {
  }

}
