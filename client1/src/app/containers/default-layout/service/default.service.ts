import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlFormationService } from 'src/app/views/shared/services/url-formation.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private http:HttpClient, private url:UrlFormationService) { }

  getNavigationMenu(Id: any): Observable<any> {
      return this.http.get(this.url.getNavigableMenu().concat(Id))  
  }
}
