import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCashierComponent } from './delete-cashier.component';

describe('DeleteCashierComponent', () => {
  let component: DeleteCashierComponent;
  let fixture: ComponentFixture<DeleteCashierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCashierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
