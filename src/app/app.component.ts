
import { Component } from "@angular/core";
import { ProductListComponent } from "./products/product-list.component";
@Component({
  selector:'pm-root',
  template: `<div>
  <h1>{{pageTitle}}</h1>
`
  

})
export class AppComponent{
  pageTitle:string= 'Acme Product Management';

}
