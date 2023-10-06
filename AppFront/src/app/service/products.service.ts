import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpCLient = inject(HttpClient);
  baseUrl = "http://localhost:9000/api/products"

  getAll(){
    return firstValueFrom(
      this.httpCLient.get<any[]>(this.baseUrl),);
  }
 traerCosas(){
  const httpOptions = {
    headers : new HttpHeaders({"autorizado":localStorage.getItem("user_token")!})
  }
}
}
