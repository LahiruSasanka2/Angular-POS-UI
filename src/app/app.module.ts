import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
