import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {NgIf} from '@angular/common';
import {AgePipe} from '../pipes/age.pipe';
import {ExperiencePipe} from '../pipes/experience.pipe';
import {RatingPipe} from '../pipes/rating.pipe';
import {SitterStatusDirective} from '../directives/sitter-status.directive';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.css'],
  imports: [
    NgIf,
    RouterLink,
    AgePipe,
    ExperiencePipe,
    RatingPipe,
    SitterStatusDirective
  ],
  standalone: true
})
export class SitterDetailComponent implements OnInit {
  sitter: PetSitter | undefined;

  constructor(
    private route: ActivatedRoute,
    private sitterService: SitterService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sitterService.getSitterById(id).subscribe((data) => {
      this.sitter = data;
    });
  }
}
