import {Component, OnInit} from '@angular/core';
import {RandomImageService} from '../service/random-image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data = [];

  constructor(private randomImageService: RandomImageService) {
  }

  ngOnInit() {
    this.randomImageService.getRandomImages().subscribe((next) => {
      this.data = next.data;
    });
  }

}
