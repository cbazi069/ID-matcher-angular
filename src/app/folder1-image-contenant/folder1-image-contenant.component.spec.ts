import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Folder1ImageContenantComponent } from './folder1-image-contenant.component';

describe('Folder1ImageContenantComponent', () => {
  let component: Folder1ImageContenantComponent;
  let fixture: ComponentFixture<Folder1ImageContenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Folder1ImageContenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Folder1ImageContenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
