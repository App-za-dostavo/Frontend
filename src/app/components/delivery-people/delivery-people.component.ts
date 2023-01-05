import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Dostavljalec } from 'src/app/models/dostavljalec';
import { DeliveryService } from 'src/app/services/delivery.service';
import {
  faBicycle,
  faCarSide,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delivery-people',
  templateUrl: './delivery-people.component.html',
  styleUrls: ['./delivery-people.component.css'],
})
export class DeliveryPeopleComponent implements OnInit {
  faBicycle = faBicycle;
  faCarSide = faCarSide;
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;

  constructor(private deliveryService: DeliveryService) {}

  public dostavljalec: Dostavljalec[] | undefined;

  ngOnInit(): void {
    this.deliveryService.getDeliveryPeople().subscribe(
      (data) => {
        console.log(data);
        this.dostavljalec = data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
}
