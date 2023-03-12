import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B54DetailComponent } from './b54-detail.component';

describe('B54DetailComponent', () => {
  let component: B54DetailComponent;
  let fixture: ComponentFixture<B54DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B54DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B54DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
