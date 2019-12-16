import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CustomerModel} from "../model/customer.model";
import {ListModel} from "../model/list.model";
import {KpiModel} from "../model/kpi.model";

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://api.vimero4j.com/v1/customer-management/customers';

  getCustomers() {
    return this.http.get<ListModel>(this.baseUrl);
  }

  createCustomer(customer: CustomerModel) {
    return this.http.post(this.baseUrl, customer);
  }

  getKPI() {
    return this.http.get<KpiModel>(this.baseUrl + '/kpi');
  }

  getAnalysis(id: string) {
    return this.http.get<CustomerModel>(this.baseUrl + '/' + id);
  }

}
