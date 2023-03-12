import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B54Component } from './b54.component';

describe('B54Component', () => {
  let component: B54Component;
  let fixture: ComponentFixture<B54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B54Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
