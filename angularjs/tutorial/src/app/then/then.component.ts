import { Component } from "@angular/core";

@Component({
    selector:"app-then",
    template:`
    <div *ngIf="disPlaying then thenBlock;else elseBlock"></div>
    
    <ng-template #thenBlock>
    <h2>If is true</h2>
    </ng-template>
    
    <ng-template #elseBlock>
    <h2>If is false then it executes else condition</h2>
    </ng-template>`,
    styles:[]
})
export class ThenComponent{
    disPlaying=false;
}