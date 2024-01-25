import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUpcomingUrl = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming';
  private apiOrdersUrl = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';
  constructor(
    private http: HttpClient
  ) {}

  public getDataUpcoming() : Observable<any>{
    return this.http.get<any>(this.apiUpcomingUrl);
  }

  public getDataOrders():Observable<any>{
    return this.http.get<any>(this.apiOrdersUrl);
  }
}
