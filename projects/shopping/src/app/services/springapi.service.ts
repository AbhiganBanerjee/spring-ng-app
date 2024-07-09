//import the Injectable to mark it as a service
import { Injectable } from "@angular/core";

//import the HttpClient service here, to communicate with Spring Web MVC REST API
import { HttpClient } from "@angular/common/http";

//import the Observable to make Async method, from the RxJS library 
import { Observable } from "rxjs";

//Create the Service class 
@Injectable({
    providedIn : 'root'
})
export class SpringApiService{
    //Inject the HttpClient service, into this SpringApiService
    constructor(private http : HttpClient){}

    //Add some utility business requirement Service methods

    /*Add the method to get all the games details as Array of JSON from Spring API
    defined as Observable because its an async method */
    GetAllGames():Observable<any[]>{
        //use the http reference to make a GET mode API call
        return this.http.get<any[]>(`http://localhost:8080/getGames`);
    }
    
    /*Add the method to get all the categories of games as Array of String from Spring API
    defined as Observable because its an async method */
    GetAllCategories():Observable<string[]>{
        //use the http reference get method and return the string[]
        return this.http.get<string[]>(`http://localhost:8080/getCategories`);
    }

    /*Add the method to get games based on a proper category passed as the query parameter*/
    GetGamesByCategory(category:string):Observable<any[]>{
        //return games based on the category parameter
        return this.http.get<any[]>(`http://localhost:8080/onCategoryGames?category=${category}`);
    }
}