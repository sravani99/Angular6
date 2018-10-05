import { NgModule } from "@angular/core";
import { OrdersRouterModule } from "./ordersroutes.module";
import{ CommonModule} from "@angular/common";
@NgModule({

    imports:[CommonModule,OrdersRouterModule]
})

export class OrdersModule{}