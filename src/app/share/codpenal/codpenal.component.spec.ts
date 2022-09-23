import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodpenalComponent } from './codpenal.component';

describe('CodpenalComponent', () => {
  let component: CodpenalComponent;
  let fixture: ComponentFixture<CodpenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodpenalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodpenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
