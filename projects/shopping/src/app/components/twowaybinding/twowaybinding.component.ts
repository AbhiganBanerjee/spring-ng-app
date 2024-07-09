import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  RegisterClick(data:any):void{
    //JSON.sstringify is a general JS method to convert data to json format
    alert(`${JSON.stringify(data)}`);
  }
}
