import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index03Component } from './index03.component';

describe('Index03Component', () => {
  let component: Index03Component;
  let fixture: ComponentFixture<Index03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Index03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
