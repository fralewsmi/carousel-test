import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  constructor() { }

  getRandomImage(): string {
    return "https://picsum.photos/1024/200/?random";
  }
}
