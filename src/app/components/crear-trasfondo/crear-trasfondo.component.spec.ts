import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrasfondoComponent } from './crear-trasfondo.component';

describe('CrearTrasfondoComponent', () => {
  let component: CrearTrasfondoComponent;
  let fixture: ComponentFixture<CrearTrasfondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTrasfondoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTrasfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
