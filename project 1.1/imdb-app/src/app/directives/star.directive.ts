import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';
// custom directive which gives color to star-glyphicon based on the rating range
@Directive({
  selector: '[appStar]'
})
export class StarDirective implements OnInit {
  @Input() ratingVal: number;
  constructor(private eleRef: ElementRef, private render: Renderer2) { }
  ngOnInit() {
    if (this.ratingVal < 3) {
      this.render.setStyle(this.eleRef.nativeElement, 'color', '#34495e');
    } else if (this.ratingVal < 5 && this.ratingVal > 2) {
      this.render.setStyle(this.eleRef.nativeElement, 'color', '#7f8c8d');
    } else {
      this.render.setStyle(this.eleRef.nativeElement, 'color', '#c0392b');
    }
  }
}
