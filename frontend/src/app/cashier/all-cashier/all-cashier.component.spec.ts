import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCashierComponent } from './all-cashier.component';

describe('AllCashierComponent', () => {
  let component: AllCashierComponent;
  let fixture: ComponentFixture<AllCashierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCashierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
