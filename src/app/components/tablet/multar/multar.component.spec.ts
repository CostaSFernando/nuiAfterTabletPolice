import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultarComponent } from './multar.component';

describe('MultarComponent', () => {
  let component: MultarComponent;
  let fixture: ComponentFixture<MultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
