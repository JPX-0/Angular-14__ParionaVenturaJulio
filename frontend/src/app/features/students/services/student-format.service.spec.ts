import { TestBed } from '@angular/core/testing';

import { StudentFormatService } from './student-format.service';

describe('StudentFormatService', () => {
  let service: StudentFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
