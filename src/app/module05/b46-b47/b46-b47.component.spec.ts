import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B46B47Component } from './b46-b47.component';

describe('B46B47Component', () => {
  let component: B46B47Component;
  let fixture: ComponentFixture<B46B47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B46B47Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B46B47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
