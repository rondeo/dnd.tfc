import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStatsComponent } from './crear-stats.component';

describe('CrearStatsComponent', () => {
  let component: CrearStatsComponent;
  let fixture: ComponentFixture<CrearStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
