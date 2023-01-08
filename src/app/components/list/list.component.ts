import { Component, OnInit } from '@angular/core';
import { Seznam } from 'src/app/models/seznam';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private deliveryService: DeliveryService) {}

  public seznam: Seznam[] | undefined;

  ngOnInit(): void {
    this.deliveryService.getOrdersList().subscribe(
      (data) => {
        console.log(data);
        this.seznam = data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
}
