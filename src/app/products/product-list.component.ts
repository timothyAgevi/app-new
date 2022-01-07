import { Component } from "@angular/core";

@Component({
selector:'pm-products',
templateUrl:'./product-list.component.html'

})
export class ProductListComponent{
    pageTitle:string ='Product List !';
    imageWidth:number=50;//add properties to class
    imageMargin:number=2;
    products: any[]=[
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
}