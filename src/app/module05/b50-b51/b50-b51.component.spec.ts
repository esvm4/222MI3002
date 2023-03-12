import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B50B51Component } from './b50-b51.component';

describe('B50B51Component', () => {
  let component: B50B51Component;
  let fixture: ComponentFixture<B50B51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B50B51Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B50B51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
