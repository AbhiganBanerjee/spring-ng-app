import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent {
  //by default it is set to login
  public CaseName:string = 'Login';

  //On button click get the button name and set the casename based on it
  public ButtonClick(e:any):void{
    this.CaseName = e.target.name;
  }
}
