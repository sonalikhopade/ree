import { Component, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reebnew';

  constructor(@Inject(DOCUMENT) private document: any) { }

navbarOpen = false ;

toggleNavbar() {

  this.navbarOpen = !this.navbarOpen;
}

goToUrl(): void {
    this.document.location.href = 'http://www.reeb.in/blog/';
}


}