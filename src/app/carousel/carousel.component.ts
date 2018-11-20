import {Component, OnDestroy, OnInit} from '@angular/core';
import {RandomImageService} from '../service/random-image.service';
import {Image} from '../model/image';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
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
  randomImage1: Image = {id: '', url: ''};
  randomImage2: Image = {id: '', url: ''};
  subscription: Subscription;

  constructor(private randomImageService: RandomImageService) {
  }

  ngOnInit() {
    this.randomImageService.getRandomImages().subscribe((data: Image[]) => {
      this.images = data;
      this.subscription = timer(0, 5000).subscribe(() => this.setRandomImages(data));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*
  * Sets both images for the carousels, ensuring the second does not match the first
   */
  private setRandomImages(images: Image[]) {
    this.randomImage1 = this.getRandomImage(images);
    let randomImage = this.getRandomImage(images);
    while (randomImage.id === this.randomImage1.id) {
      randomImage = this.getRandomImage(images);
    }
    this.randomImage2 = randomImage;
  }

  /*
  * Returns a random image from an array for images
  */
  private getRandomImage(images: Image[]) {
    return images[Math.floor(Math.random() * images.length)];
  }
}
