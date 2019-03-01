import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoadComponent } from './register-load.component';

describe('RegisterLoadComponent', () => {
  let component: RegisterLoadComponent;
  let fixture: ComponentFixture<RegisterLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
