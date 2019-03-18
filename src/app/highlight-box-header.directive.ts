import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightBoxHeader]'
})
export class HighlightBoxHeaderDirective {
hi
  constructor(private e:ElementRef) { 
    e.nativeElement.style.color='white';
    e.nativeElement.style.backgroundColor='rgb(131, 66, 5)';
  }

}
