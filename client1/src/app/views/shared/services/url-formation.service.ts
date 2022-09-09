import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { constants } from '../static/constants';


@Injectable({
  providedIn: 'root'
})
export class UrlFormationService {

  constructor(private http: HttpClient) {
  
   }
   alignmentUrl: String = environment.alignmentUrl;
   appLoginUrl: String = environment.commonUrl;


   getNavigableMenu(){
    return `${this.appLoginUrl}/${constants.navUrl}`
   }
}
