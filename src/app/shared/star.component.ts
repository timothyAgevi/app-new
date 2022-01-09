import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
   selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:[ './star.component.css']
})
export class StarComponent implements OnChanges{//recalculate cropwidth based on rating
  //onChange
    @Input() rating:number=0; // input rating
  cropwidth:number=75;
  @Output() ratingClicked  : EventEmitter <string>=
  new EventEmitter();

  ngOnChanges(): void {
      this.cropwidth=this.rating * 75/5;
  }
  onClick(): void{
      this.ratingClicked.emit(`the rating ${this.rating}was clicked`)

  }
}