import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
selector:'pm-products',
templateUrl:'./product-list.component.html',
styleUrls:[ './product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy{
    pageTitle:string ='Product List !';
    imageWidth:number=50;//add properties to class
    imageMargin:number=2;
    showImage:boolean=false;
    private _listFilter:string='';
    errorMessage:string='';
    sub!:Subscription;
     get listFilter():string{
       return this._listFilter;
     }
     set listFilter(value:string){
         this._listFilter=value;
         console.log('In setter :' ,value)
        this.filteredProducts=this.performFilter(value);
     }



    filteredProducts:IProduct []=[];
    products: IProduct[]=[];
    
     constructor(private productService :ProductService){

     }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
    performFilter(filterBy:string):IProduct[]{
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct)=>
      product.productName.toLocaleLowerCase().includes(filterBy));
    }
    //methods come after properties
    toggleImage():void{
      this.showImage=!this.showImage;
    }
    ngOnInit(): void {
      this.sub=  this.productService.getProducts()
      .subscribe({
        next :products=>{
          this.products= products;
          this.filteredProducts=this.products;
      },
        error:err =>this.errorMessage=err

      });
     ngOnDestroy();{
      this.sub.unsubscribe()
     }
       
    }
    onRatingClicked(message:string):void{
      this.pageTitle='Product List'  +message;

    }
}

function ngOnDestroy() {
  throw new Error("Function not implemented.");
}
