import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index02Component } from './index02.component';

describe('Index02Component', () => {
  let component: Index02Component;
  let fixture: ComponentFixture<Index02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Index02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
