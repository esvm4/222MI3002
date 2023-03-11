import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index05Component } from './index05.component';

describe('Index05Component', () => {
  let component: Index05Component;
  let fixture: ComponentFixture<Index05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Index05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
