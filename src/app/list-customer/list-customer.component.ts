import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {CustomerModel} from "../model/customer.model";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: CustomerModel[]

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    this.service.getCustomers()
      .subscribe( response => {
        this.customers = response.data;
      });
  }

  addCustomer() {
    this.router.navigate(['add-customer']);
  }

  analysisCustomer(customer: CustomerModel): void {
    localStorage.removeItem("analysisCustomerId");
    localStorage.setItem("analysisCustomerId", customer.id);
    this.router.navigate(['analysis-customer']);
  };

  showKPI() {
    this.router.navigate(['kpi-customer']);
  }

}
