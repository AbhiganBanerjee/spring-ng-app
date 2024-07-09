import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  //Create an any type array to hold all the products
  public Products:any[] = [];


  /*Create Properties to hold the Products count of each category, 
  coming from Parent Component, so mark them as @Input*/
  public ElectronicsCount:number = 0;
  public JeweleryCount:number = 0;
  public MenCount:number = 0;
  public WomenCount:number = 0;

  //make a method to fetch products data from fakestore
  public LoadProducts(url:string):void{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      this.Products = data;

      /*Get electronics count by filtering through the actual array of all products
      and store that count in the ProductComponent's property*/
      this.ElectronicsCount = data.filter((product:any)=>{
        return product.category == 'electronics';
      }).length;

      /*Get jewelery count by filtering through the actual array of all products
      and store that count in the ProductComponent's property*/
      this.JeweleryCount = data.filter((product:any)=>{
        return product.category == 'jewelery';
      }).length;

      //Similarly get count for men's cloths
      this.MenCount = data.filter((product:any)=>{
        return product.category == "men's clothing";
      }).length;

      //Similarly for women's cloth count
      this.WomenCount = data.filter((product:any)=>{
        return product.category == "women's clothing";
      }).length;
    })
  }

  /*Create the CategoryChanged method to hold the category name 
  coming from the Filter component*/
  public CategoryChanged(e:string):void{
    //So we will fetch only the products of the category name
    //so append that category name with the url to fetch only those products
    this.LoadProducts(`https://fakestoreapi.com/products/category/${e}`);
  }

  public FilterProduct(e:string):void{
    //When it is all then load all products
    if(e == "all"){
      this.LoadProducts('https://fakestoreapi.com/products');
    }
    else{
      this.LoadProducts(`https://fakestoreapi.com/products/category/${e}`);
    }
  }

  //Method to hold the category value for Checkbox custom event
  public CheckFilter(e:string):void{
    this.LoadProducts(`https://fakestoreapi.com/products/category/${e}`);
  }

  //On initialization call the loadProducts
  ngOnInit(): void {
    this.LoadProducts('https://fakestoreapi.com/products');
  }
}
