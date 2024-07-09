import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  //Array to hold the categories
  public Categories:string[] = [];

  /*Create Properties to hold the Products count of each category, 
  coming from Parent Component, so mark them as @Input*/
  @Input() public ElectronicsCount:number = 0;
  @Input() public JeweleryCount:number = 0;
  @Input() public MenCount:number = 0;
  @Input() public WomenCount:number = 0;

  //Create a Custom Event to Send the Category name from Filter to Product comp
  @Output() public FilterClicked:EventEmitter<string> = new EventEmitter<string>();

  //Create another event-emitter for Select Change event
  @Output() public ChangeFilter:EventEmitter<string> = new EventEmitter<string>();

  //Create another Custom-Event to send category name for the CheckBox change events
  @Output() public CheckBoxFilter:EventEmitter<string> = new EventEmitter<string>();

  //Make a method to load all the categories too
  public LoadCategories():void{
    fetch(`https://fakestoreapi.com/products/categories`)
    .then((res)=>res.json())
    .then((data)=>{
      this.Categories = data;
    })
  }

  //Create a Trigger event to emit those Category name to the Product component
  public ButtonClicked(e:any):void{
    alert(e.target.name);

    // Emit the category name via the custom event
    this.FilterClicked.emit(e.target.name);
  } 

  //We can also use the drop-down to send category name to Product comp
  public FilterChanged(e:any):void{
    this.ChangeFilter.emit(e.target.value);
  }

  //On checkbox change collect the value of the checkboxes
  public CheckChange(e:any):void{
    if(e.target.checked){
      alert(e.target.value);

      //Emit the value of the checkbox by the Custom Event
      this.CheckBoxFilter.emit(e.target.value);
    }
  }

  ngOnInit(): void {
    this.LoadCategories();
  }
}
