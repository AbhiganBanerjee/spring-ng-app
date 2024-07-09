import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forpropertydemo',
  templateUrl: './forpropertydemo.component.html',
  styleUrls: ['./forpropertydemo.component.css']
})
export class ForpropertydemoComponent implements OnInit{

  public Products:any=[
    {Name:"Samsung TV",Price:66000.44},
    {Name:"Nike Casuals",Price:3400.44}
  ]

  public Add(){
    alert("Add clicked..");
    this.Products = [
      {Name:"Samsung TV",Price:66000.44},
      {Name:"Nike Casuals",Price:3400.44},
      {Name:"Watch",Price:5000.44}
    ]
  }
  
  //Make a method to track changes
  public TrackChanges(idx:number):number{
    //it will check if the existing item updated or not in that case it will iterate
    //if any new item added, index count wil be updated then it will iterate
    //otherwise if no changes then it will not iterate the collection
    return idx;
  }

  ngOnInit(): void {
      
  }
}
