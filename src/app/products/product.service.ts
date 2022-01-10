import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { catchError,tap } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class ProductService{
  private productUrl='api/products/products.json';
  constructor(private http:HttpClient){

  }
    getProducts():Observable <IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl) ;
    }
  
}