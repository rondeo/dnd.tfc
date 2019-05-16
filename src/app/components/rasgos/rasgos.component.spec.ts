import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasgosComponent } from './rasgos.component';

describe('RasgosComponent', () => {
  let component: RasgosComponent;
  let fixture: ComponentFixture<RasgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
