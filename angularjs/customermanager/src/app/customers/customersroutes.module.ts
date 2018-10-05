import { NgModule } from "@angular/core";
import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersComponent } from "./customers.component";
import { CustomersListViewComponent } from "./customerslistviev.component";
import { RouterModule,Routes} from "@angular/router"

const custroutes:Routes =[
    { path :'',component:CustomersComponent

    }
]
@NgModule({
    declarations:[
        CustomersCardViewComponent,CustomersComponent,CustomersListViewComponent
    ],
    imports:[RouterModule.forChild(custroutes)],
    exports:[RouterModule]
})
export class CustomersRouterModule{}