import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenderComponent } from './prender.component';

describe('PrenderComponent', () => {
  let component: PrenderComponent;
  let fixture: ComponentFixture<PrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
