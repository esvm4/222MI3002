import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index04Component } from './index04.component';

describe('Index04Component', () => {
  let component: Index04Component;
  let fixture: ComponentFixture<Index04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Index04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
