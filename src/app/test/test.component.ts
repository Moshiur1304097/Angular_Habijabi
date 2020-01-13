import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
            <h2>{{ 2+2 }} </h2>
  
            <div>
              Hello {{ name }}!
            </div>

            <h2> {{ "Welcome to " +  name1 }}</h2>

            <h2> {{ name.length }}</h2>
            <h2> {{ name1.length }}</h2>

            <h2> {{ name.toUpperCase() }}</h2>
            <h2> {{ name.toLowerCase() }}</h2>
          
            <h2> {{ greetUser() }}</h2>
            <h2> {{ greetUser().length }}</h2>

            <h2> {{ siteUrl }}</h2>

            <input type="text" value="Moshiur">
            <br><br>

            <input [id]="myId" type='text' value="Moshiur">
            &nbsp; 
            <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Moshiur">
            &nbsp;
            <br><br>
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Moshiur">

            <h2 class="text-success">Codevolution</h2>
            <h2 class="text-danger">Moshiur</h2>
            
           
            <h2 [class]="successClass">Codevolution</h2>

            <h2 class="text-success">Codevolution</h2>

            <h2 class="text-special" [class] ="successClass">Codevolution</h2>

            <h2 [class.text-danger]="hasError">Codevolution</h2>

            <h2 [ngClass]="messageClasses">Codevolution</h2>

            <h2 [style.color]="hasError ? 'red': 'green'">Style Binding</h2>
            
             <button (click)="onClick($event)">Greet</button>

             {{ greeting }}

             <input [(ngModel)]="name2" type="text">

             {{ name2 }}


           


             <div *ngIf="displayName2; then thenBlock; else elseBlock"></div>

             <ng-template #thenBlock>
             <h2> IF Block</h2>
             </ng-template>

             <ng-template #elseBlock>
             <h2> Else Block</h2>
             </ng-template>

             <div [ngSwitch] ="color">
               <div *ngSwitchCase="'red'">You picked red color</div> 
               <div *ngSwitchCase="'blue'">You picked blue color</div> 
               <div *ngSwitchCase="'green'">You picked green color</div> 
               <div *ngSwitchCase="'orange'">You picked orange   color</div> 
               <div *ngSwitchDefault> Pick again</div> 

               <div *ngFor="let color of colors; index as i">
                  <h2>Index {{ i }} Color {{ color }} </h2>
               </div>

        `,
  // styleUrls: ['./test.component.scss']

          styles: [`
                .text-success{
                  color:green;
                }
                .text-danger{
                  color:red;
                }
                .text-special{
                  font-style: italic;
                }
          
          `]
})
export class TestComponent implements OnInit {

  public name= "Moshiur";
  public name1="Codevolution";
  public siteUrl = window.location.href;

  public myId ="testId";
  public isDisabled =true;

  public hasError = true;
  public isSpecial = true;
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this. isSpecial
  }

  public greeting ="";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name +'!'; 
  }

  onClick(event){
    
    console.log(event);
    this.greeting= "Welcome to Codevolution";
  }

  public name2="";
  //displayName =true;

  //ngIf Statement
  // <h2 *ngIf="displayName; else elseBlock">Codevolution</h2>

  //            <ng-template #elseBlock>
  //             <h2>Name is hidden</h2>
  //            </ng-template>

  displayName2 =false;

  public color = 'orange'; 

  public colors =["red","orange","blue","white","green"];


}
