import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {AppRoutingModule} from "./app.routing";
import {CustomerService} from "./service/customer.service";
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { KpiCustomerComponent } from './kpi-customer/kpi-customer.component';
import { AnalysisCustomerComponent } from './analysis-customer/analysis-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    AddCustomerComponent,
    KpiCustomerComponent,
    AnalysisCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
