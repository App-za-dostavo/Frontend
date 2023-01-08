import { Component, OnInit } from '@angular/core';
import { Narocilo } from 'src/app/models/narocilo';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private deliveryService: DeliveryService) {}

  public listNarocil: Narocilo[] | undefined;
  public novoNarocilo!: Narocilo;

  ngOnInit(): void {
    this.deliveryService.getOrders().subscribe(
      (data) => {
        console.log(data);
        this.listNarocil = data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  postNewOrder() {
    console.log('Hello, this is ', JSON.stringify(this.novoNarocilo));
    this.deliveryService.postOrder(46.5, 14, this.novoNarocilo).subscribe(
      (data) => {
        this.novoNarocilo = data;
      },
      (error) =>
        console.error(
          'error',
          error,
          typeof this.novoNarocilo,
          JSON.stringify(this.novoNarocilo),
          typeof JSON.stringify(this.novoNarocilo)
        )
    );
    console.log(this.getNarocilo());
  }

  public selectedNarocilo?: Narocilo;

  onSelect(narocilo: Narocilo) {
    this.selectedNarocilo = narocilo;

    this.addNarocilo(narocilo);

    return narocilo;
  }

  addNarocilo(narocilo: Narocilo) {
    this.novoNarocilo = narocilo;
  }

  getNarocilo() {
    return this.novoNarocilo;
  }
}
