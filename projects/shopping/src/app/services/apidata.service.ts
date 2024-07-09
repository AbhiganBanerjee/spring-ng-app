import { Injectable } from '@angular/core';

//import the HttpClient class, once we have included the HttpClientModule in app.module.ts
import { HttpClient } from '@angular/common/http';

//import the Observable from rxjs to make our methods async
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  //Inject the HttpClient Service into this ApiDataService
  constructor(private http:HttpClient) { 
    
  }

  //GetCategories will communicate with API and will get the Categories data
  //Defining this as Async using Observable, and returns tha array of string as categories
  GetCategories():Observable<string[]>{
    //Use the http.get method to get the categories from API, of string[] type
    return this.http.get<string[]>(`http://fakestoreapi.com/products/categories`);
  } 

  //GetProducts will communicate with API and will get the Products data
  //This returns any type [] because it is Array of JSON each JSON each product
  GetProducts():Observable<any[]>{
    return this.http.get<any[]>(`http://fakestoreapi.com/products`);
  }
}
