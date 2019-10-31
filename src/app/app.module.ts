import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
 import { MatCardModule } from '@angular/material';
 import { HttpClientModule } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';
 import {MatRadioModule} from '@angular/material/radio';
 import {MatDialogModule} from '@angular/material/dialog';
 import { NgxFloatButtonModule } from 'ngx-float-button';
 import { AngularFontAwesomeModule } from 'angular-font-awesome';
 import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
 import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { EmailService } from './services/email.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,

   
 
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule ,
    HttpClientModule,
    MatRadioModule,
    MatDialogModule,
    NgxFloatButtonModule,
    AngularFontAwesomeModule,
    CarouselModule, WavesModule,
    SlickCarouselModule


  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
