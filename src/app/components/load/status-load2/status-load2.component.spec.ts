import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLoad2Component } from './status-load2.component';

describe('StatusLoad2Component', () => {
  let component: StatusLoad2Component;
  let fixture: ComponentFixture<StatusLoad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLoad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLoad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
