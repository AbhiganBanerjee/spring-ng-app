import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-outputdemo',
  templateUrl: './outputdemo.component.html',
  styleUrls: ['./outputdemo.component.css']
})
export class OutputdemoComponent implements OnInit, OnChanges{
  //Collect the value from parent so make a property
  @Input() public UserName:any;
  
  //configure prev and current values
  public PreviousValue:any;
  public CurrentValue:any;

  //A msg to display wheather change detected or not
  public msg:string = '';

  ngOnInit(): void {
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Read every property from the changes
    for(var property in changes){
      //store each property value in a reference
      let change = changes[property];
      //access the currentValue from this change ref and assing it
      this.CurrentValue = change.currentValue;
      //access the previousValue from this change ref and assing it
      this.PreviousValue = change.previousValue;
    }

    if(this.CurrentValue == this.PreviousValue){
      this.msg = "NO Change Detected...";
    }else{
      this.msg = "Change Detected!";
    }
  }
}
