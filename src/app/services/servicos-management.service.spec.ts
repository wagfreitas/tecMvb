import { TestBed } from '@angular/core/testing';

import { ServicosManagementService } from './servicos-management.service';

describe('ServicosManagementService', () => {
  let service: ServicosManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
