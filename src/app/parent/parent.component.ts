import { Component } from '@angular/core';
import { Composant1Component } from './composant1/composant1.component';

@Component({
  selector: 'app-parent',
  imports: [Composant1Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {}
