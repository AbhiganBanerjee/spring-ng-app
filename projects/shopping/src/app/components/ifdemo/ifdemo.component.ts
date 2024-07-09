import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit{
  public Product:any={};

  //fetch product on ngOnInit
  ngOnInit():void{
    fetch(`http://fakestoreapi.com/products/2`)
    .then((res)=>res.json())
    .then((data)=>{
      this.Product=data;
    })
  }
}
