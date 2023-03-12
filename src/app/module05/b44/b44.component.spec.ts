import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B44Component } from './b44.component';

describe('B44Component', () => {
  let component: B44Component;
  let fixture: ComponentFixture<B44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B44Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
