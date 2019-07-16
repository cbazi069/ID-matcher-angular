import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Folder2ImageContenantComponent } from './folder2-image-contenant.component';

describe('Folder2ImageContenantComponent', () => {
  let component: Folder2ImageContenantComponent;
  let fixture: ComponentFixture<Folder2ImageContenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Folder2ImageContenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Folder2ImageContenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
