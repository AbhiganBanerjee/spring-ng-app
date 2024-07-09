import { Component } from "@angular/core";

@Component({
    selector : 'app-home',
    template : `
        <h2><i>{{title}}</i></h2>
        <p><i>Welcome to Online Shopping Store</i></p>
    `,
    styles : ['h2{padding : 10px; color:white; font-family:monospace; text-align : center; background-color : red}', 'p{color:blue}']
})
export class HomeComponent{
    title = 'Shopping Home';
}