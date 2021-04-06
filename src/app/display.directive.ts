import { element } from 'protractor';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  constructor(private el:ElementRef) { }

  @HostListener ('mouseenter') onMouseEnter(){
    this.display('brown');
  }

  @HostListener('mouseleave') onMOuseLeave(){
    this.display(null);
  }

  private display(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
