import { Component } from "@angular/core";


@Component({
    selector:'app-orders',
    templateUrl:'orders.component.html',
    styleUrls:['orders.component.css']
})
export class OrdersComponent{
    title='tour of heroes';
    heroes=['prabaha','sidard','ghostrider'];
    myHero= this.heroes[0];

}