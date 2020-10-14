import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getUser', () => {
    it('should return an Observable<User[]>', () => {
      const dummyUser = {
          id: '123456',
          firstName: 'toto',
          lastName: 'tata',
          username: 'test',
          email: 'toto@gmail.com',
          password: '123'
      };

      const id = '123456';

      service.getUserById(id).subscribe(user => {
        expect(user).toEqual(dummyUser);
      });

      const req = httpMock.expectOne(`/server/api/user/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);
    });
  });

});

