import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
})
export class HoverHighlightDirective {
  @HostBinding('style.transition')
  transition =
    'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease';

  @HostBinding('style.backgroundColor')
  background = '';

  @HostBinding('style.color')
  color = '';

  @HostBinding('style.boxShadow')
  boxShadow = '';

  @HostBinding('style.transform')
  transform = 'translateY(0)';

  @HostListener('mouseenter')
  onEnter() {
    this.background = '#e3f2fd'; // light blue
    this.color = '#0d47a1';
    this.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    this.transform = 'translateY(-1px)';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.background = '';
    this.color = '';
    this.boxShadow = '';
    this.transform = 'translateY(0)';
  }
}
