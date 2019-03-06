import { Component, OnInit } from '@angular/core';
import {Customer} from '../dto/customer';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor() { }

  ngOnInit() {
  }

}
