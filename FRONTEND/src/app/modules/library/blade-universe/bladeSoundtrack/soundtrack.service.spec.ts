import { TestBed } from '@angular/core/testing';

import { AudioService } from '../bladeSoundtrack/soundtrack.service';

describe('SoundtrackService', () => {
  let service: AudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
