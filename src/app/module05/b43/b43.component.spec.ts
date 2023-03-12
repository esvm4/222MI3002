import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B43Component } from './b43.component';

describe('B43Component', () => {
  let component: B43Component;
  let fixture: ComponentFixture<B43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B43Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
