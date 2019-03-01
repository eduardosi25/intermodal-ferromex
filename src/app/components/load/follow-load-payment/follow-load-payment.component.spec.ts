import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowLoadPaymentComponent } from './follow-load-payment.component';

describe('FollowLoadPaymentComponent', () => {
  let component: FollowLoadPaymentComponent;
  let fixture: ComponentFixture<FollowLoadPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowLoadPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowLoadPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
