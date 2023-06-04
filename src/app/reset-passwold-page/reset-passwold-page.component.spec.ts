import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswoldPageComponent } from './reset-passwold-page.component';

describe('ResetPasswoldPageComponent', () => {
  let component: ResetPasswoldPageComponent;
  let fixture: ComponentFixture<ResetPasswoldPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswoldPageComponent]
    });
    fixture = TestBed.createComponent(ResetPasswoldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
