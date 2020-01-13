import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
   templateUrl: './test.component.html',
  // template: `
  //           <h2>{{ 2+2 }} </h2>
  
    
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

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey Moshiur!');
  }

  public message1='Welcome to Codevolution';

  public person = {
    "fName" : "John",
    "lName" : "Doe"

  };

  public date =new Date();



}
