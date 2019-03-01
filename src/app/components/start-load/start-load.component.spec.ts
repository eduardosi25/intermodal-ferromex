import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLoadComponent } from './start-load.component';

describe('StartLoadComponent', () => {
  let component: StartLoadComponent;
  let fixture: ComponentFixture<StartLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
