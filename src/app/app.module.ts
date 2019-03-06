import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import {RouterModule, Routes} from '@angular/router';

const appRouts: Routes = [
  {
    path: "dashboard",
    component: DashbordComponent
  },
  {
    path: "manage-customers",
    component: ManageCustomersComponent
  },
  {
    path: "manage-items",
    component: ManageItemsComponent
  },
  {
    path: "place-order",
    component: PlaceOrderComponent
  },
  {
    path: "view-orders",
    component: ViewOrdersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    PlaceOrderComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
