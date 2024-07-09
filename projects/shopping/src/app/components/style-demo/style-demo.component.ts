import { Component } from '@angular/core';

@Component({
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styleUrls: ['./style-demo.component.css']
})
export class StyleDemoComponent {
  public styleObject:any = {
    'position' : 'fixed',
    'top' : '',
    'left' : ''
  }

  //On mousemove configure the styleObject with proper mouse position
  public MouseMove(e:any):void{
    this.styleObject = {
      'position' : 'fixed',
      'left' : e.clientX + 'px', //mouse x axis is applied as left
      'top' : e.clientY + 'px' //y axis position is applied to top
    }
  }
}
