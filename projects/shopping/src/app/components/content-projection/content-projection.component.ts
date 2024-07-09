import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit{

  public Product:any={};
  public buttonText:string = 'Preview';

  //Create the main thenBlock template ref that will be dynamically changed on situation
  public thenBlock:TemplateRef<any> | null = null;

  //Create 2 different templates, that needed to rendered dynamically based on situation
  //As these 2 needed to rendered or projected in the container we use the marker @ViewChild
  @ViewChild('description',{static:true}) public description:TemplateRef<any> | null = null;
  @ViewChild('preview',{static:true}) public preview:TemplateRef<any> | null = null;

  public LoadProduct(){
    //fetch products from api and store it on Product
    fetch("http://fakestoreapi.com/products/2")
    .then((res)=>res.json())
    .then((data)=>this.Product=data)
  }

  ngOnInit(): void {
    this.LoadProduct();
    //By default the page should load with description
    this.thenBlock = this.description;
  }

  // Toggle the button text also on toggle click along with the thenBlock also
  public ToggleClick():void{
    this.buttonText = (this.buttonText == 'Preview')?this.buttonText='Description' : this.buttonText='Preview';
    this.thenBlock = (this.thenBlock == this.preview)?this.thenBlock=this.description : this.preview;
  }
}
