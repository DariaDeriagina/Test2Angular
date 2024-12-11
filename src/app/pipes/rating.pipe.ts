import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  transform(rating: number): string {
    const maxStars = 5;
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(maxStars - rating);
    return fullStars + emptyStars;
  }
}
