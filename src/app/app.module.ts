import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
// for service calls 
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';

// prime ng browser animations module
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// primeng modules
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';


import { AppComponent } from './app.component';
//custom component
import { TopNavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import {ProductsComponent} from './products/products';
import { ProfileComponent } from './profiles/profiles';
import { ProfileDetailsComponent } from './profileDetails/profileDetails';
import { DropdownComponent } from './dropdown/dropdown.component';

// custom directives
import { SimpleDirective } from './directives/simple.directive';
import { NumberOnlyDirective } from './directives/numOnly.directive';

// custom pipes
import { PhnFormatPipe} from './pipe/phnFormat.pipe';
import { TitleCasePipe } from './pipe/titleCase.pipe';

// custom service
import { CommonService } from './services/common.services';
import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';
import { PubsubService } from './services/pubsub.service';
import { ValidationsComponent } from './validations/validations.component';


@NgModule({
  declarations: [
    // components,directives,pipes
    AppComponent,
    TopNavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    // pipes
    PhnFormatPipe,
    TitleCasePipe,
    // directives
    SimpleDirective,
    NumberOnlyDirective,
    DropdownComponent,
    ValidationsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // creating the route objects
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent},
      {path:'products',component:ProductsComponent},
      {path:'profiles',component:ProfileComponent}
    ]),
    HttpClientModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIfJxs6K9mWynJgr77khDxjXL-1Zw6RKU'
    }),
    // browser animations module
    BrowserAnimationsModule,
    // prime ng modules
    CalendarModule,
    InputMaskModule
  ],
  providers: [
    CommonService,
    DataService,
    ProductService,
    PubsubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
