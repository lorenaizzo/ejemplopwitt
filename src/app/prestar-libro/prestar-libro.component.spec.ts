import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestarLibroComponent } from './prestar-libro.component';

describe('PrestarLibroComponent', () => {
  let component: PrestarLibroComponent;
  let fixture: ComponentFixture<PrestarLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestarLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
