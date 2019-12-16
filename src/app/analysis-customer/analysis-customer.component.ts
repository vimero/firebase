import { Component, OnInit } from '@angular/core';
import {CustomerModel} from "../model/customer.model";
import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-analysis-customer',
  templateUrl: './analysis-customer.component.html',
  styleUrls: ['./analysis-customer.component.css']
})
export class AnalysisCustomerComponent implements OnInit {

  customer : CustomerModel;

  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    let customerId = localStorage.getItem("analysisCustomerId");
    console.log(customerId);
    this.service.getAnalysis(customerId)
      .subscribe( response => {
        this.customer = response;
      });
  }

  listCustomer() {
    this.router.navigate(['list-customer']);
  }

}
