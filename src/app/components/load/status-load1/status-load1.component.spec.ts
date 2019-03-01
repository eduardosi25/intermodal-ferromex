import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLoad1Component } from './status-load1.component';

describe('StatusLoad1Component', () => {
  let component: StatusLoad1Component;
  let fixture: ComponentFixture<StatusLoad1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLoad1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLoad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
