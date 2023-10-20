import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs';
import { Order } from '../interface/order.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = 'http://localhost:9000/api/products';
  createOrderUrl = 'http://localhost:9000/api/create-order';

  httpClient = inject(HttpClient);

  traerTodo() {
    return firstValueFrom(this.httpClient.get<any[]>(this.productUrl) as Observable<any[]>);
  }

  async createOrder(order:Order){
    const result = await this.httpClient.post<any[]>(this.createOrderUrl, order)as Observable<any[]>
    return firstValueFrom(result);
  }
}
