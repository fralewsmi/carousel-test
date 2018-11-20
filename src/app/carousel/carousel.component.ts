import {Component, OnInit} from '@angular/core';
import {RandomImageService} from '../service/random-image.service';
import {Image} from '../model/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  title = 'Test';
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus tellus, tempus quis aliquet sed, consectetur in
      arcu. Donec et ligula facilisis, ullamcorper ipsum eleifend, sodales tellus. Fusce eleifend risus at arcu porta,
      id rhoncus neque egestas. Etiam suscipit egestas lectus at cursus. Sed cursus erat sem, id vulputate metus
      placerat vitae. Pellentesque elementum sapien ac nibh malesuada, et aliquet purus malesuada. Praesent imperdiet
      venenatis malesuada. Proin eget ante ullamcorper, lacinia nulla eget, pharetra erat. Quisque ac dolor id elit
      vestibulum venenatis. Quisque mollis eget tortor et ornare.
      Proin sodales faucibus dignissim. Aliquam volutpat nisl velit, ut hendrerit enim sollicitudin nec. Aliquam
      posuere, mi sed laoreet faucibus, odio tellus bibendum mi, nec finibus leo dolor vitae felis. In tincidunt
      bibendum nulla, sit amet ullamcorper orci bibendum ac. Nulla et faucibus enim. Integer sed convallis justo. Nulla
      ultricies diam quis odio commodo lobortis. Pellentesque fermentum dolor nunc, eu placerat tortor viverra vel.
      Morbi placerat porttitor luctus. Phasellus turpis sem, suscipit consequat congue eu, condimentum vel sapien. Nulla
      porttitor, lorem eget imperdiet semper, sem erat finibus lectus, non hendrerit mi risus ut tellus. Nulla facilisi.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pulvinar risus nec lacus tincidunt
      consectetur. Pellentesque vehicula convallis placerat. Nam porttitor tortor sed finibus viverra.`;

  images: Image[] = [];

  constructor(private randomImageService: RandomImageService) {
  }

  ngOnInit() {
    this.randomImageService.getRandomImages().subscribe((data) => {
      this.images = data;
    });
  }

}
