import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //title is by default public access modifier
  title = 'Register New User'; //type-inference datatype decided upon initialization
}
