import {Component} from '@angular/core'

@Component({
    selector:'app-array',
    template:`
    <h2 *ngIf="false; else elseBlock">  {{title}}  </h2>
    <ng-template #elseBlock>
    <h3>if condtion false then it excutes else condition</h3>
    </ng-template>
    
    <p [style.display]="'block'">
    Expression sets display to block
    </p>
    <p [style.dispaly]="'none'">
    Expression sets display to none
    </p>`,
    styleUrls:[]
})
export class ArrayComponent{
  title='Tour';
  
}