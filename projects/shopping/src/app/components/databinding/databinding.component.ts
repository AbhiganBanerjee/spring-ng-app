import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  public Product:any={};

  public Count:number = 1;

  public LoadProduct(url:string):void{
    //Fetch the particular product
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      //Give the fetched data object to product object
      this.Product = data;
    })
  }

  ngOnInit():void{
    this.LoadProduct("https://fakestoreapi.com/products/1");
  }

  public NextClick():void{
    //Loading the next product by increamenting the count
    this.Count++;
    this.LoadProduct(`https://fakestoreapi.com/products/${this.Count}`)
  }

  public PrevClick():void{
    //Loading the previous product by decresing the count
    this.Count--;
    this.LoadProduct(`https://fakestoreapi.com/products/${this.Count}`)
  }
}
