import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOneComponent } from './first-one.component';

describe('FirstOneComponent', () => {
  let component: FirstOneComponent;
  let fixture: ComponentFixture<FirstOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
