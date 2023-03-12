import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B54UpdateComponent } from './b54-update.component';

describe('B54UpdateComponent', () => {
  let component: B54UpdateComponent;
  let fixture: ComponentFixture<B54UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B54UpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B54UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
