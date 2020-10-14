import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('#onAbort() should set #viewMode to "view" ', () => {
    component.viewMode = 'edition';
    expect(component.viewMode).toBe('edition', 'edition mode at first');
    component.onAbort();
    expect(component.viewMode).toBe('view', 'view mode after click');
  });

  it('#onEditPwd() should set #showPopup to true', () => {
    expect(component.showPopup).toBe(false, 'false at first');
    component.onEditPwd();
    expect(component.showPopup).toBe(true, 'true after click');
  });

});
