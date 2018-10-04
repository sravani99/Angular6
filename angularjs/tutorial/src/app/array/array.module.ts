import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ArrayComponent } from "./array.component";
import { ArrayListComponent } from "./arraylist.component";
import { ArraycardComponent } from "./arraycard.component";
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";
import { arrayroutes} from "./array.route"

@NgModule({
    declarations:[ArrayComponent,ArrayListComponent
        ,ArraycardComponent
    ],
    imports:[CommonModule,RouterModule.forChild(arrayroutes)]
 })
 export class Arraymodule{

 }