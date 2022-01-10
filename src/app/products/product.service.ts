import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
  private productUrl='api/products/products.json';
  constructor(private http:HttpClient){

  }
    getProducts():IProduct []{
        return
    }
  
}