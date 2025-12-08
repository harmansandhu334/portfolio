import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillHighlight',
  standalone: true
})
export class SkillHighlightPipe implements PipeTransform {
  transform(skill: string): string {
    if (!skill) return '';

    return `⭐ ${skill.toUpperCase()}`;
  }
}
