import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersModule } from './customers/customers.module';
import { RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";
import { RouteModule } from './app.route';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
