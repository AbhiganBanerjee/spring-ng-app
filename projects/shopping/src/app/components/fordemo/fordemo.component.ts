import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit{

  //Create our own meny data
  public menu:any = [
    {Category : "Electronics", Products:["Samsung TV","Mobile"]},
    {Category : "Footwears", Products:["Nike Casuals", "Lee Boot"]}
  ];

  public topics:any = [
    {Title: "HTML", Definition:"It is a markup Language."},
    {Title: "CSS", Definition:"It configures styles for HTML."},
    {Title: "JavaScript", Definition:"It makes the static page to Dynamic and more interactive."}
  ]; 

  ngOnInit(): void {
    
  }
}
