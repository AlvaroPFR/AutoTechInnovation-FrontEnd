import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansPaymentsComponent } from './plans-payments.component';

describe('PlansPaymentsComponent', () => {
  let component: PlansPaymentsComponent;
  let fixture: ComponentFixture<PlansPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlansPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
