import { Component } from '@angular/core';
import { Composant2Component } from '../composant2/composant2.component';

@Component({
  selector: 'app-composant1',
  imports: [Composant2Component],
  templateUrl: './composant1.component.html',
  styleUrl: './composant1.component.css',
})
export class Composant1Component {}
