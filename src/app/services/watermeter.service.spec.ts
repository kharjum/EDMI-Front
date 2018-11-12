import { TestBed } from '@angular/core/testing';

import { WatermeterService } from './watermeter.service';

describe('WatermeterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatermeterService = TestBed.get(WatermeterService);
    expect(service).toBeTruthy();
  });
});
