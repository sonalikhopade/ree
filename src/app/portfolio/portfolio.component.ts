import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
 import { portfolio } from '../services/portfolio.mode';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

 private _selectedType: 'all' | 'website' | 'branding' | 'printwork' | 'digitalwork' | 'illustration' = 'all' ;

  
  get selctedType(){
    return this._selectedType;
  }

  set selectedType(newValue:'all' | 'website' | 'branding' | 'printwork' | 'digitalwork' | 'illustration'){
    if(newValue !== this._selectedType){
      this._selectedType = newValue;
      this.loadPortfolios(this._selectedType);
    }
  }

 portfolios : portfolio[];


  constructor(private portfolioSvc : PortfolioService) { 
  }

  ngOnInit() {
    this.loadPortfolios(this._selectedType);
  
  }
loadPortfolios(selctedType: string):void { 
  this.portfolioSvc.get().subscribe(data=> {
    this.portfolios = data.filter( p => p.type === selctedType || selctedType === 'all');
  });
}

}
  