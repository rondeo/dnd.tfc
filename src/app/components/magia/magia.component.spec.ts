import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagiaComponent } from './magia.component';

describe('MagiaComponent', () => {
  let component: MagiaComponent;
  let fixture: ComponentFixture<MagiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
