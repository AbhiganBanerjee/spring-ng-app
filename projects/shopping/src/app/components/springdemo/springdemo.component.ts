import { Component, OnInit } from '@angular/core';

//import the springapi service in this component
import { SpringApiService } from '../../services/springapi.service';

//import the BreakPointObserver for handling Responsiveness
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-springdemo',
  templateUrl: './springdemo.component.html',
  styleUrls: ['./springdemo.component.css']
})
export class SpringdemoComponent implements OnInit{
  
  //Defining a reference to follow the screen breakpoint
  public isSmallScreen: boolean = false;
  public isLargeScreen: boolean = false;

  //Inject the SpringApiService into this component via constructor
  //Injecting the BreakPointObserver service also to maintain the Responsive UI
  constructor(private spring : SpringApiService, private breakpointObserver: BreakpointObserver){}
  
  //Create a reference array to hold the categories
  public Categories:string[] = [];

  //Create a reference array to hold the Games
  public Games:any[] = [];

  //Create a method to handle category change
  public CategoryChange(e:any){
    /*it will get the value from the select drop-down, and will fetch only that category game
    passing the e.target.value that is the selected category as argument*/
    this.spring.GetGamesByCategory(e.target.value).subscribe((data)=>{
      this.Games = data;
    })
  }

  ngOnInit(): void {
    //on initialization load all the Categories, and using subscriber store the data 
    this.spring.GetAllCategories().subscribe((data)=>{
      //Add an all option 
      data.unshift("All");
      this.Categories = data;
    })

    //On init also load all the Games at first
    this.spring.GetAllGames().subscribe((data)=>{
      this.Games = data;
    })

    this.breakpointObserver.observe([Breakpoints.XSmall])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        this.isLargeScreen = !(result.matches);
        console.log(this.isSmallScreen);
      });
  }

  //Defining styles to apply based on Screen BreakPoints
  smallScreenStyles = {
    marginTop : '20px'
  };
  largeScreenStyles = {
    marginTop : '0px',
    marginLeft : '20px'
  };

  public textSmallClass = {
    fontFamily : 'monospace',
    fontWeight : 'bold',
    fontSize : '17px',
    textAlign : 'center'
  };
  public textLargeClass = {
    fontFamily : 'monospace',
    fontWeight : 'bold',
    fontSize : '30px',
    textAlign : 'center'
  };
}
