import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLoad4Component } from './status-load4.component';

describe('StatusLoad4Component', () => {
  let component: StatusLoad4Component;
  let fixture: ComponentFixture<StatusLoad4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLoad4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLoad4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
