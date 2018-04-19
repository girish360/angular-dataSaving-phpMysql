import { TestBed, inject } from '@angular/core/testing';

import { StringAdminService } from './string-admin.service';

describe('StringAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringAdminService]
    });
  });

  it('should be created', inject([StringAdminService], (service: StringAdminService) => {
    expect(service).toBeTruthy();
  }));
});
