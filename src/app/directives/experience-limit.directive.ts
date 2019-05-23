import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appExperienceLimit]'
})
export class ExperienceLimitDirective {

  constructor(private el: ElementRef) { }
    
  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');

    if(this.el.nativeElement.value > 355000){
      this.el.nativeElement.value = 355000;
    }else if(this.el.nativeElement.value < 0){
      this.el.nativeElement.value = '0';
    }

    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
