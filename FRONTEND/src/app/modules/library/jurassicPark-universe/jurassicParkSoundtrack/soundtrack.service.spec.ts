import { TestBed } from '@angular/core/testing';

import { AudioService } from '../jurassicParkSoundtrack/soundtrack.service';

describe('AudioService ', () => {
  let service: AudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
