import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGenComponent } from './qr-gen.component';

describe('QrGenComponent', () => {
  let component: QrGenComponent;
  let fixture: ComponentFixture<QrGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
