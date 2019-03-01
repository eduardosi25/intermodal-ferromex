import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowLoadTimeComponent } from './follow-load-time.component';

describe('FollowLoadTimeComponent', () => {
  let component: FollowLoadTimeComponent;
  let fixture: ComponentFixture<FollowLoadTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowLoadTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowLoadTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
