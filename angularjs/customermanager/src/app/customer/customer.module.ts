import { NgModule } from "@angular/core";
import { CustomerRouterModule } from "./customerrouter.module";
import { CommonModule } from "@angular/common";
@NgModule({
    imports:[CommonModule,CustomerRouterModule]
})

export class CustomerModule{}