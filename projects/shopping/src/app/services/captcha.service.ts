//Import the Injectable to create a Service
import { Injectable } from "@angular/core";

//Create the Service class, by using the @Injectable directive, and define the Provider scope
@Injectable({
    providedIn : 'root'
})
export class CaptchaService{
    //Add a Service method, it will return some random code every time
    public GenerateCode(){
        //JS Math.random() generates random number from 0.7
        //we dont want floating number so we * 10
        let a = Math.random()*10;
        let b = Math.random()*10;
        let c = Math.random()*10;
        let d = Math.random()*10;
        let e = Math.random()*10;
        let f = Math.random()*10;

        //Round if some fraction comes
        let code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`;

        //return the code
        return code;
    }
}