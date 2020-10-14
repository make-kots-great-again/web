import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentification.service';

describe('AuthentificationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

});
