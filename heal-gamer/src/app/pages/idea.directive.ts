import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIdea]',
})
export class IdeaDirective {
  constructor(private el: ElementRef) {
    this.opacity('1.0');
    this.transform('all 0.25ms ease');
    this.scale('1.0');
  }

  private opacity(show: string) {
    this.el.nativeElement.style.opacity = show;
  }

  private transform(trans: string) {
    this.el.nativeElement.style.transform = trans;
  }

  private scale(value: string) {
    this.el.nativeElement.style.transform = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.scale('1.0');
    this.transform('all 0.25ms ease');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('0.8');
    this.scale('0.8');
    this.transform('all 0.25ms ease');
  }
}
