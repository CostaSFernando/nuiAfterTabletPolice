import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCodPenalComponent } from './base-cod-penal.component';

describe('BaseCodPenalComponent', () => {
  let component: BaseCodPenalComponent;
  let fixture: ComponentFixture<BaseCodPenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCodPenalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCodPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
