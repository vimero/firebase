import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private service: CustomerService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age:['', Validators.required],
      dateBirthday: ['', Validators.required]
    });

  }

  onSubmit() {
    this.service.createCustomer(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-customer']);
      });
  }

  listCustomer() {
    this.router.navigate(['list-customer']);
  }

}
