import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgClass, NgStyle, NgTemplateOutlet],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  tableau: number[] = [];
  details: boolean = false;

  addRow(): void {
    this.details = !this.details;
    console.log(this.details);
    this.tableau.push(this.tableau.length);
  }
}
