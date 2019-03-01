import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLoad3Component } from './status-load3.component';

describe('StatusLoad3Component', () => {
  let component: StatusLoad3Component;
  let fixture: ComponentFixture<StatusLoad3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLoad3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLoad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
