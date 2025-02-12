import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  tableau: number[] = [];
  details: boolean = false;

  addRow(): void {
    this.tableau.push(this.tableau.length);
    this.details = true;
  }
}
