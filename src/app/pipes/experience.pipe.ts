import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {
  transform(experience: number): string {
    return experience === 0 ? 'New sitter' : `${experience} years of experience`;
  }
}
