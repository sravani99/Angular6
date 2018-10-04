import { ThenComponent } from "./then/then.component";
import {PageNotFound } from "./pageNotFound.component";
import { Routes} from "@angular/router";
export const routes:Routes = [
    {path:'', redirectTo:'array', pathMatch:'full'},
    {path:'then', component: ThenComponent},
    {path:'array', loadChildren:'./arra/array.module#ArrayModule'},
    {path:'then', loadChildren:'./then/then.module#ThenModule'},
    {path:'**',component:PageNotFound}
]