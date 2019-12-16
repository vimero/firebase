import { Component, OnInit } from '@angular/core';
import {KpiModel} from "../model/kpi.model";
import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-kpi-customer',
  templateUrl: './kpi-customer.component.html',
  styleUrls: ['./kpi-customer.component.css']
})
export class KpiCustomerComponent implements OnInit {

  kpi: KpiModel

  constructor(private router: Router, private service: CustomerService) { }


  ngOnInit() {
    this.service.getKPI()
      .subscribe( response => {
        this.kpi = response;
      });
  }

  listCustomer() {
    this.router.navigate(['list-customer']);
  }
}
