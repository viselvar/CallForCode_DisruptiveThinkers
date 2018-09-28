import { TestBed, inject } from '@angular/core/testing';

import { IbmUrlService } from './ibm-url.service';

describe('IbmUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IbmUrlService]
    });
  });

  it('should be created', inject([IbmUrlService], (service: IbmUrlService) => {
    expect(service).toBeTruthy();
  }));
});
