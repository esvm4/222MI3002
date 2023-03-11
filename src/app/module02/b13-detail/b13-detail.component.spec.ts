import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B13DetailComponent } from './b13-detail.component';

describe('B13DetailComponent', () => {
  let component: B13DetailComponent;
  let fixture: ComponentFixture<B13DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B13DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B13DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
