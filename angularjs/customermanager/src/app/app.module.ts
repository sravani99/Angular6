import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
 import { CustomersComponent } from './customers/customers.component';
import { CustomersCardViewComponent} from
'./customers/customerscardview.component'

@NgModule({
  declarations: [
    AppComponent,CustomerComponent,CustomersCardViewComponent,
    CustomersComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
