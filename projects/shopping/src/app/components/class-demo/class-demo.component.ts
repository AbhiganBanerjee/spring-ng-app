import { Component } from '@angular/core';

@Component({
  selector: 'app-class-demo',
  templateUrl: './class-demo.component.html',
  styleUrls: ['./class-demo.component.css']
})
export class ClassDemoComponent {
  //Create an array to store usernames
  public Users:any[] = [
    {UserName: "john"},
    {UserName: "john12"},
    {UserName: "john_nit"},
    {UserName: "david"}
  ];

  public UserName:string = '';

  //Give a msg based on username exists or not
  public msg:string = '';

  //set 2 flag property for success and failure
  public IsSuccess:boolean = false;
  public IsDanger:boolean = false;


  public VerifyUser():void{
    for(var user of this.Users){
      if(user.UserName == this.UserName){
        this.msg = 'UserName Taken - try another!!';
        //Switching the booleans
        this.IsSuccess = false;
        this.IsDanger = true;
        break;
      }else{
        this.msg = 'UserName Available..';
        //Switching the booleans
        this.IsSuccess = true;
        this.IsDanger = false;
      }
    }
  }
}
