import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalServiceComponent } from './aditional-service.component';

describe('AditionalServiceComponent', () => {
  let component: AditionalServiceComponent;
  let fixture: ComponentFixture<AditionalServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
