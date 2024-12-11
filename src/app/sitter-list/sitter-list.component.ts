import { Component, OnInit } from '@angular/core';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AgePipe} from '../pipes/age.pipe';
import {ExperiencePipe} from '../pipes/experience.pipe';
import {RatingPipe} from '../pipes/rating.pipe';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css'],
  imports: [
    RouterLink,
    NgForOf,
    FormsModule,
    AgePipe,
    ExperiencePipe,
    RatingPipe
  ],
  standalone: true
})
export class SitterListComponent implements OnInit {
  sitters: PetSitter[] = [];
  filteredSitters: PetSitter[] = [];
  specialtyFilter: string = '';
  availabilityFilter: boolean | '' = '';

  constructor(private sitterService: SitterService) {}

  ngOnInit(): void {
    this.sitterService.getSitters().subscribe((data) => {
      this.sitters = data;
      this.filteredSitters = data;
    });
  }

  filterSitters(): void {
    this.filteredSitters = this.sitters.filter((sitter) => {
      const specialtyMatch =
        !this.specialtyFilter || sitter.specialty === this.specialtyFilter;
      const availabilityMatch =
        this.availabilityFilter === '' ||
        sitter.available === this.availabilityFilter;
      return specialtyMatch && availabilityMatch;
    });
  }
}
