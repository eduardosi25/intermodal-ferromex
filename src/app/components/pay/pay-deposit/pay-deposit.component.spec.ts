import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDepositComponent } from './pay-deposit.component';

describe('PayDepositComponent', () => {
  let component: PayDepositComponent;
  let fixture: ComponentFixture<PayDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
