import { Component, OnInit } from '@angular/core';

//import the ApiDataService so that it can be injected into this Component
import { ApidataService } from '../../services/apidata.service';

@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent implements OnInit{

  //define the Categories property to hold the categories
  public Categories:string[] = [];

  //define the products array
  public Products:any[] = [];

  //Inject the ApiDataService in this component
  constructor(private apiData : ApidataService){

  }
 
  ngOnInit(): void {
      //Now On initialization fetch the categories via the service reference
      //Store that data into the Categories reference using the subscribe callback
      this.apiData.GetCategories().subscribe((data)=>{
        this.Categories = data;
      });

      //Similarly fetch the products also, and by subscribe call back store that data into the products array
      this.apiData.GetProducts().subscribe((data)=>{
        this.Products = data;
      })
  }
} 
