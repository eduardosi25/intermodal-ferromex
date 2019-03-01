import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareLoadComponent } from './prepare-load.component';

describe('PrepareLoadComponent', () => {
  let component: PrepareLoadComponent;
  let fixture: ComponentFixture<PrepareLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
