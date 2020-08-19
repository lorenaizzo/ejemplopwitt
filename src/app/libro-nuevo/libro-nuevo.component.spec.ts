import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroNuevoComponent } from './libro-nuevo.component';

describe('LibroNuevoComponent', () => {
  let component: LibroNuevoComponent;
  let fixture: ComponentFixture<LibroNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
