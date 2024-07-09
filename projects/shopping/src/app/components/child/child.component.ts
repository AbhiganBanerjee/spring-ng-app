import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //Create a property for child, which expects an input from parent
  //and will be accessed in other component so use @Input()
  @Input() public MsgFromParent:string = '';

  //Recieve the object from the Parentcomponent
  @Input() public Product:any = {};

  //Creating a Custom event, by defining the EventEmitter type
  //And also allocate memory for that Custom Event by using new operator
  @Output()  public ChildComponentClick:EventEmitter<string> = new EventEmitter<string>();

  //Creating Another Custom event, for emitting any type of data
  @Output() public ChildComponentChange:EventEmitter<any> = new EventEmitter<any>();

  //on the button click we are emitting a string value by triggering the custom event in child
  public BtnClick():void{
    this.ChildComponentClick.emit('Hello! from Child');
  }

  public SendProduct():void{
    //emit the TV Product object to the parent using custom event
    this.ChildComponentChange.emit({Name:"Samsung TV", Price:45000.54});
  }
}
