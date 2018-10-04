import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ThenComponent } from "./then.component";
import { ThenListComponent} from "./thenlist.component";
import { thenroutes }from "./then.routes"
@NgModule({
    declarations:[ThenComponent,ThenListComponent],
    imports:[ CommonModule , RouterModule.forChild(thenroutes)]
})
export class ThenModule{

}