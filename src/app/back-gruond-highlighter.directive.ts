import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBackGruondHighlighter]'
})
export class BackGruondHighlighterDirective {

  constructor(private e:ElementRef) { 
   // this.e.nativeElement.style.backgroundColor="purple"
  }
@HostListener('mouseenter') onmouseenter(){
  this.highlighter('white')
}
  highlighter(color){
this.e.nativeElement.style.color=color;
this.e.nativeElement.style.backgroundColor="purple"
  }
@HostListener('mouseleave') onmouseleave(){
  this.e.nativeElement.style.color='black';
this.e.nativeElement.style.backgroundColor="white"
}
}
