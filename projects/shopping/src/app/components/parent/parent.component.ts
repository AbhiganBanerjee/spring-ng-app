import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  //Create a property msg that will be send to child
  public MsgToChild:string = '';

  //Collecting msg from a child
  public MsgFromChild:string = '';

  //Create a Product object to hold the incoming object from Child
  public ProductFromChild:any = {};

  //Send this msg when the button is clicked in parent comp
  public SendMsg():void{
    this.MsgToChild = 'Hello! from Parent';
  }

  //on the cutom "ChildComponentClick" event, collect the data from 
  //child component using the following method, it will take the event related value as args
  public GetMessage(e:string):void{
    this.MsgFromChild = e;
  }

  //Configure the GetProduct() method to get the Object details emitted from Child custom event
  public GetProduct(e:any){
    //Just hold the emitted object in parent property
    this.ProductFromChild = e;
  }
}
