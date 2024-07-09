import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixindexComponent } from './components/netflix/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './components/netflix/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './components/netflix/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './components/netflix/netflixregister/netflixregister.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ForpropertydemoComponent } from './components/forpropertydemo/forpropertydemo.component';
import { ClassDemoComponent } from './components/class-demo/class-demo.component';
import { StyleDemoComponent } from './components/style-demo/style-demo.component';
import { EventDemoComponent } from './components/event-demo/event-demo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { InputdemoComponent } from './components/inputdemo/inputdemo.component';
import { OutputdemoComponent } from './components/outputdemo/outputdemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdemoComponent } from './components/materialdemo/materialdemo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LazyloadingdemoComponent } from './components/lazyloadingdemo/lazyloadingdemo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CaptchaService } from './services/captcha.service';
import {HttpClientModule} from '@angular/common/http';
import { DatademoComponent } from './components/datademo/datademo.component';
import { SpringdemoComponent } from './components/springdemo/springdemo.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    TwowaybindingComponent,
    IfdemoComponent,
    ContentProjectionComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    ForpropertydemoComponent,
    ClassDemoComponent,
    StyleDemoComponent,
    EventDemoComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    FilterComponent,
    InputdemoComponent,
    OutputdemoComponent,
    MaterialdemoComponent,
    LazyloadingdemoComponent,
    DatademoComponent,
    SpringdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [SpringdemoComponent]
})
export class AppModule { }
