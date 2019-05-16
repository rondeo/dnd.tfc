import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClaseComponent } from './crear-clase.component';

describe('CrearClaseComponent', () => {
  let component: CrearClaseComponent;
  let fixture: ComponentFixture<CrearClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
