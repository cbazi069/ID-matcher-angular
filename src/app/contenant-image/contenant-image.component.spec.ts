import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenantImageComponent } from './contenant-image.component';

describe('ContenantImageComponent', () => {
  let component: ContenantImageComponent;
  let fixture: ComponentFixture<ContenantImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenantImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenantImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
