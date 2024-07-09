import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit{
  //create a categories array to get all the categories
  public categories:string[] = [];

  //Create another collection to store products which are array of JSONs
  public products:any[] = [];

  //Maintaining one more array to hold the cart items
  public cartItems:any[] = [];
  public cartCount:number = 0;

  //Write a method to add items in cart
  public AddToCartClick(id:number):void{
    //we will get the item id from param, and will fetch that particular product based on id from API
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      //pushing the specific product in our cartItems array
      this.cartItems.push(data);
      alert(data.title + " Added to Cart Successfully...");
      //update the cartCount
      this.GetCartCount();
    });
  }

  //write a method to get the length of the cartItems array
  public GetCartCount():void{
    this.cartCount = this.cartItems.length;
  }

  //Create a load categories method to fetch categories from API
  public LoadCategories():void{
    fetch("http://fakestoreapi.com/products/categories")
    .then((res)=>res.json())
    .then((data)=>{
      //Add a ALL option also in the data array
      data.unshift("all")
      this.categories = data;
    })
  }

  //Make a LoadProducts to load the products, based on the URL passed as param
  public LoadProducts(url:any):void{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>this.products = data)
  }

  //onchange for select dropdown, the category name will be collected
  public HandleCategoryChange(e:any):void{
    //Get the option value that is clicked in the drop-down, and bind it in url
    if(e.target.value == "all"){
      //If the selected option is "all" then load all the products
      this.LoadProducts("http://fakestoreapi.com/products");
    }else{
      //If the selected option is not "all" load that particular category, by passing in URL
      this.LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }

  //Create a method to show CartItems
  public blockFlag:boolean = false;
  public ShowCartClick():void{  
    this.blockFlag = (this.blockFlag == false)?this.blockFlag=true : this.blockFlag=false;

    if(this.cartItems.length==0){
      alert("There is no items in Cart to Display!!");
      this.blockFlag = false;
    }
  }

  //DeleteClick to delete items from Cart
  public DeleteClick(id:any):void{
    //traverse the cartItems array and search for the item matching with this id
    for(var item of this.cartItems){
      if(item.id == id){
        //remove that item from array, by getting the index of that item
        this.cartItems.splice(this.cartItems.indexOf(item),1);
        //update the new cartcount after removing
        this.GetCartCount();
      }
    }
  }

  ngOnInit(): void {
    //Load the categories on init
    this.LoadCategories();

    //on init at first I will load all the products, by passing all URL
    this.LoadProducts("http://fakestoreapi.com/products");
  }
}
