import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { Router } from "@angular/router";
const custmroutes=[
    {path:'customer',component:CustomerComponent}
]
@NgModule({
    declarations :[CustomerComponent]
})

export class CustomerRouterModule{}