import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCashierComponent } from './single-cashier.component';

describe('SingleCashierComponent', () => {
  let component: SingleCashierComponent;
  let fixture: ComponentFixture<SingleCashierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCashierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
