import { Component } from '@angular/core';
import { Composant3Component } from '../composant3/composant3.component';

@Component({
  selector: 'app-composant2',
  imports: [Composant3Component],
  templateUrl: './composant2.component.html',
  styleUrl: './composant2.component.css',
})
export class Composant2Component {}
