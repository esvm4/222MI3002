import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai14Component } from './bai14.component';

describe('Bai14Component', () => {
  let component: Bai14Component;
  let fixture: ComponentFixture<Bai14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
