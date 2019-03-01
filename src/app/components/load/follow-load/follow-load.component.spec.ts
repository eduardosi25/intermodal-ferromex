import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowLoadComponent } from './follow-load.component';

describe('FollowLoadComponent', () => {
  let component: FollowLoadComponent;
  let fixture: ComponentFixture<FollowLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
