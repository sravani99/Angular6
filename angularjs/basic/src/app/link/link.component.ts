import { Component } from "@angular/core";

@Component({
    selector:'app-link',
    templateUrl:'link.component.html',
    styleUrls:['link.component.css']

})
export class LinkComponent{
    public name='property binding';
    // public successclass='text-success';
    public value='';
    public myid='idtest';
    public isdisabled=false;
    public names='class binding';
    public success='text-suc';
    public danger='text-danger';
    public greeting ="";
    onclick(){
    alert(event);
        this.greeting='welcome sravan';
    }
}