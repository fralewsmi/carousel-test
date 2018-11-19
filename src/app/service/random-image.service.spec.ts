import { TestBed } from '@angular/core/testing';

import { RandomImageService } from './random-image.service';

describe('RandomImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomImageService = TestBed.get(RandomImageService);
    expect(service).toBeTruthy();
  });

  it('returns random image', () => {
    const service: RandomImageService = TestBed.get(RandomImageService);
    expect(typeof service.getRandomImage()).toBe('string');
  })
});
