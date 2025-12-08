import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePrefix',
  standalone: true,
})
export class TitlePrefixPipe implements PipeTransform {
  transform(value: string, suffix: string = 'Portfolio'): string {
    if (!value) return '';
    return `${value} | ${suffix}`;
  }
}
