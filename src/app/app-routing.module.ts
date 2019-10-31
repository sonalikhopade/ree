import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'portfolio' , component : PortfolioComponent},
  {path : 'contact' , component : ContactComponent},
  { path: '**',component: HomeComponent},
  {path : '' , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
