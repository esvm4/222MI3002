import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B54DeleteComponent } from './b54-delete.component';

describe('B54DeleteComponent', () => {
  let component: B54DeleteComponent;
  let fixture: ComponentFixture<B54DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B54DeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B54DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
