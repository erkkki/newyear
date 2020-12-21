import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit{

  @Input() appAutoFocus: boolean;

  constructor(private el: ElementRef) { }

  ngAfterContentInit(): void {
    this.el.nativeElement.focus();
  }
}
