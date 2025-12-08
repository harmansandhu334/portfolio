import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverElevate]',
  standalone: true
})
export class HoverElevateDirective {

  @HostBinding('style.transition')
  transition = 'transform 0.2s ease, box-shadow 0.2s ease';

  @HostBinding('style.boxShadow')
  boxShadow = '0 0 0 rgba(0,0,0,0)';

  @HostBinding('style.transform')
  transform = 'translateY(0)';

  @HostListener('mouseenter')
  onEnter() {
    this.boxShadow = '0 8px 20px rgba(0,0,0,0.20)';
    this.transform = 'translateY(-4px)';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.boxShadow = '0 0 0 rgba(0,0,0,0)';
    this.transform = 'translateY(0)';
  }
}
