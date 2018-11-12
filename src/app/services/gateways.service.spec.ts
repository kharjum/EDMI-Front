import { TestBed } from '@angular/core/testing';

import { GatewaysService } from './gateways.service';

describe('GatewaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatewaysService = TestBed.get(GatewaysService);
    expect(service).toBeTruthy();
  });
});
