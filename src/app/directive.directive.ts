import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private element:ElementRef) { 
      element.nativeElement.style.backgroundColor = 'Green'
  }

}
