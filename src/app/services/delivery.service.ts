import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environment/environment';
import { Dostavljalec } from '../models/dostavljalec';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  private dostavljalecUrl = environment['dostavljalecUrl'] + '/v1/dostavljalec';

  getDeliveryPeople() {
    return this.http.get<Dostavljalec[]>(this.dostavljalecUrl);
  }
}
