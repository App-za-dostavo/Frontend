import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPeopleComponent } from './delivery-people.component';

describe('DeliveryPeopleComponent', () => {
  let component: DeliveryPeopleComponent;
  let fixture: ComponentFixture<DeliveryPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
