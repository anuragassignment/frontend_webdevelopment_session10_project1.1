import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

// custom directive which changes the background color on hover based on the rating
@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input() ratingVal: number;
  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') hoverBg() {
    if (this.ratingVal < 3) {
      this.render.setStyle(this.elRef.nativeElement, 'background-color', '#95a5a6');
    } else if (this.ratingVal < 5 && this.ratingVal > 2) {
      this.render.setStyle(this.elRef.nativeElement, 'background-color', '#e74c3c');
    } else {
      this.render.setStyle(this.elRef.nativeElement, 'background-color', '#2980b9');
    }

  }
  @HostListener('mouseleave') leaveBg() {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', '#fff');
  }

}
