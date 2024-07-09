import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloadingdemo',
  templateUrl: './lazyloadingdemo.component.html',
  styleUrls: ['./lazyloadingdemo.component.css']
})
export class LazyloadingdemoComponent implements OnInit{

  //define the products array to hold the incoming JSON Array from API
  public Products:any[] = [];

  ngOnInit(): void {
      //Fetch the products from the fakestore api
      fetch(`https://fakestoreapi.com/products`)
      .then((res)=>res.json())
      .then((data)=>{
        this.Products = data; 
      })
  }
}
