import { TestBed } from '@angular/core/testing';

import { PhoneBookService } from './phonebook.service';

describe('PhonebookserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneBookService = TestBed.get(PhoneBookService);
    expect(service).toBeTruthy();
  });
});
