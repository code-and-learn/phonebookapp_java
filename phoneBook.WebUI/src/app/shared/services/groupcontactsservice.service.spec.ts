import { TestBed } from '@angular/core/testing';

import { GroupcontactService } from './groupcontact.service';

describe('GroupcontactsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupcontactService = TestBed.get(GroupcontactService);
    expect(service).toBeTruthy();
  });
});
