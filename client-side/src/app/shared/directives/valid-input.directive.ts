import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appValidInput]'
})
export class ValidInputDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  @HostListener('click')
  private onClick() {
    setInterval(() => {
      ((this.elRef.nativeElement.value).length !== 0) ?
        this.renderer.addClass(this.elRef.nativeElement, 'is-valid') :
        this.renderer.removeClass(this.elRef.nativeElement, 'is-valid');
    }, 1000);

  }
}
