import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadySeenCardComponent } from './already-seen-card.component';

describe('AlreadySeenCardComponent', () => {
  let component: AlreadySeenCardComponent;
  let fixture: ComponentFixture<AlreadySeenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadySeenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadySeenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
