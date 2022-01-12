import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './home/products/product-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
