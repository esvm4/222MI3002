import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B54CreateComponent } from './b54-create.component';

describe('B54CreateComponent', () => {
  let component: B54CreateComponent;
  let fixture: ComponentFixture<B54CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B54CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B54CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
