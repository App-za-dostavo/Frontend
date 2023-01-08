import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environment/environment';
import { Dostavljalec } from '../models/dostavljalec';
import { Narocilo } from '../models/narocilo';
import { Seznam } from '../models/seznam';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  private dostavljalecUrl = environment['dostavljalecUrl'] + '/v1/dostavljalec';
  private narociloUrl = environment['narociloUrl'] + '/v1/narocilo';
  private seznamNaročilUrl = environment['potUrl'] + '/v1/pot';

  getDeliveryPeople() {
    return this.http.get<Dostavljalec[]>(this.dostavljalecUrl);
  }

  getOrders() {
    return this.http.get<Narocilo[]>(this.narociloUrl);
  }

  getOrdersList() {
    return this.http.get<Seznam[]>(this.seznamNaročilUrl);
  }

  postOrder(
    latitude: number,
    longitude: number,
    narocilo: Narocilo
  ): Observable<Narocilo> {
    return this.http.post<Narocilo>(
      this.seznamNaročilUrl + `/lokacija=${latitude},${longitude}`,
      narocilo
    );
  }
}
