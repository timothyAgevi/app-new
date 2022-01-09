import { Component, OnInit } from "@angular/core";

import { IProduct } from "./product";

@Component({
selector:'pm-products',
templateUrl:'./product-list.component.html',
styleUrls:[ './product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string ='Product List !';
    imageWidth:number=50;//add properties to class
    imageMargin:number=2;
    showImage:boolean=false;
    private _listFilter:string='';

     get listFilter():string{
       return this._listFilter;
     }
     set listFilter(value:string){
         this._listFilter=value;
         console.log('In setter :' ,value)
        this.filteredProducts=this.performFilter(value);
     }



    filteredProducts:IProduct []=[];
    products: IProduct[]=[// import IPoduct interface
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          },
          {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2021",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
          }
    ];

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
       this._listFilter='timo' ;
    }
}