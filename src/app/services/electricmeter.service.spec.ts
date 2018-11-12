import { TestBed } from '@angular/core/testing';

import { ElectricmeterService } from './electricmeter.service';

describe('ElectricmeterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricmeterService = TestBed.get(ElectricmeterService);
    expect(service).toBeTruthy();
  });
});
