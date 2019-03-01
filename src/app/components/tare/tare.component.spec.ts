import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareComponent } from './tare.component';

describe('TareComponent', () => {
  let component: TareComponent;
  let fixture: ComponentFixture<TareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
