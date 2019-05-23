import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private el: ElementRef) { }
    
  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');

    if(this.el.nativeElement.value > 30){
      this.el.nativeElement.value = 30;
    }else if(this.el.nativeElement.value < 1){
      this.el.nativeElement.value = '';
    }

    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }


}
