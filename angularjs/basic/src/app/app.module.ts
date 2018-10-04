import { BrowserModule } from '@angular/platform-browser';
// import { FormModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import {OrdersComponent} from './orders/orders.component'
@NgModule({
  declarations: [
    AppComponent,LinkComponent,OrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
