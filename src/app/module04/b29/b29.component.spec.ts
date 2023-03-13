import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B29Component } from './b29.component';

describe('B29Component', () => {
  let component: B29Component;
  let fixture: ComponentFixture<B29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
