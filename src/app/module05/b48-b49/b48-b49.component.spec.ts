import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B48B49Component } from './b48-b49.component';

describe('B48B49Component', () => {
  let component: B48B49Component;
  let fixture: ComponentFixture<B48B49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B48B49Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B48B49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
