import { NgModule } from '@angular/core';
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import { Routes, RouterModule } from '@angular/router';
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {KpiCustomerComponent} from "./kpi-customer/kpi-customer.component";
import {AnalysisCustomerComponent} from "./analysis-customer/analysis-customer.component";

const routes: Routes = [
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'kpi-customer', component: KpiCustomerComponent },
  { path: 'analysis-customer', component: AnalysisCustomerComponent },
  {path : '', component : ListCustomerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
