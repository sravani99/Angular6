import { NgModule } from "@angular/core";
import { RouterModule,Routes} from "@angular/router"
import { CustomersRouterModule } from "./customers/customersroutes.module";
import { OrdersRouterModule } from "./orders/ordersroutes.module";
import { CustomerRouterModule } from "./customer/customerrouter.module";

const routes:Routes=[
    {path:'customers', loadChildren:"./customers/customers.module#CustomersModule"},
    
    {path:'orders', loadChildren:"./orders/orders.module#OrdersModule"},
    {path:'customer',
    loadChildren:"./customer/customer.module#CustomerModule"},
    {path:'', redirectTo:'customers', pathMatch:'full'}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes),CustomersRouterModule,CustomerRouterModule,OrdersRouterModule],
    exports:[RouterModule]
})


export class RouteModule{
}