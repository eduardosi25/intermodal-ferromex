import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLoad5Component } from './status-load5.component';

describe('StatusLoad5Component', () => {
  let component: StatusLoad5Component;
  let fixture: ComponentFixture<StatusLoad5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLoad5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLoad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
