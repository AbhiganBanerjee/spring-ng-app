//here we write the functionality for the component
import { Component, OnInit } from "@angular/core";

//We require to import the Service that we have created
import { CaptchaService } from "../../services/captcha.service";

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent implements OnInit{

    title = 'User Login';

    //Perform Injection of the CaptchaService via the Constructor
    constructor(private captcha : CaptchaService){
        //Injection done
    }

    //Creating a reference to hold the code
    public Code:string = '';

    ngOnInit(): void {
        //Call the method to get the code
        this.Code = this.captcha.GenerateCode();
    }

    public NewCode(){
        //Call the method to get the code
        this.Code = this.captcha.GenerateCode();
    }
}