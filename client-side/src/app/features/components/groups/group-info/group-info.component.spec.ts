import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { GroupInfoComponent } from './group-info.component';

describe('GroupInfoComponent', () => {
  let component: GroupInfoComponent;
  let fixture: ComponentFixture<GroupInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [ GroupInfoComponent ]
    })
    .compileComponents();
  });

});
