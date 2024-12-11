import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(age: number): string {
    return age === 1 ? `${age} year old` : `${age} years old`;
  }
}
