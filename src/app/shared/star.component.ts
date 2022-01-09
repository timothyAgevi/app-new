import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
   selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:[ './star.component.css']
})
export class StarComponent implements OnChanges{//recalculate cropwidth based on rating
  //onChange
    rating:number=4;
  cropwidth:number=75;

  ngOnChanges(): void {
      this.cropwidth=this.rating * 75/5;
  }
}