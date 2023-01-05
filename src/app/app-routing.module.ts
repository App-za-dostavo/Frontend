import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryPeopleComponent } from './components/delivery-people/delivery-people.component';
import { ListComponent } from './components/list/list.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'seznam', component: ListComponent },
  { path: 'dostavljalci', component: DeliveryPeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
