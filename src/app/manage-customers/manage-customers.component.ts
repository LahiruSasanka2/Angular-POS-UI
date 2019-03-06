import { Component, OnInit } from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Customer[]>("http://localhost:8080/api/v1/customers").subscribe(customers1=>{
     this.customers = customers1;
    });
  }

}
