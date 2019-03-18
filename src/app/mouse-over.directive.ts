import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  constructor(private e:ElementRef) { }
  @HostListener ('mouseenter') onmouseenter(){
    this.highligher("orange");
  }
  @HostListener ('mouseleave') onmouseleave(){
    this.highligher("white");
  }
  
  highligher(color){
  this.e.nativeElement.style.color=color;
  }
}
