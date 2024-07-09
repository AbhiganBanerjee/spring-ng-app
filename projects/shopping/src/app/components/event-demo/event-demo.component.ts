import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent {
  public InsertClick(e:any, obj:any):void{
    document.write(
      `
        Button Id : ${e.target.id}<br/>
        Button Name : ${e.target.name}<br/>
        Button Class : ${e.target.className}<br/>
        X pos : ${e.clientX}<br/>
        Is CtrlKey : ${e.ctrlKey}<br/>
        Product Obj : ${obj.Name} ${obj.Price}
      `
    )
  }
}
