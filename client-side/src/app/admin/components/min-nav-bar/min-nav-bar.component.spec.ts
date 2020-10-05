import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNavBArComponent } from './min-nav-bar.component';

describe('MinNavBArComponent', () => {
  let component: MinNavBArComponent;
  let fixture: ComponentFixture<MinNavBArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinNavBArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinNavBArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
