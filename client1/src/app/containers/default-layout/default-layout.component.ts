import { Component } from '@angular/core';
import { navItems } from './_nav';
import { DefaultService } from './service/default.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent  {

  public navItems = navItems;
  

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private defaultService:DefaultService ) {
    this.getNavigableMenu();
  }

  getNavigableMenu(){

    this.defaultService.getNavigationMenu(1).subscribe(res=>{
      this.navItems=res;
      console.log(res);
    })
  }
}
