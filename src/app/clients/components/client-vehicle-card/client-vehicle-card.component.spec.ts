import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVehicleCardComponent } from './client-vehicle-card.component';

describe('ClientVehicleCardComponent', () => {
  let component: ClientVehicleCardComponent;
  let fixture: ComponentFixture<ClientVehicleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientVehicleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientVehicleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
